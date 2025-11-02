/**
 * The entry point for the add-on's homepage card.
 *
 * @param {Object} e The event object.
 * @return {Card} The card to display.
 */
function onHomepage(e) {
  return createCard();
}

/**
 * Creates the main card for the add-on.
 *
 * @return {Card} The card to display.
 */
function createCard() {
  var builder = CardService.newCardBuilder();
  builder.setHeader(CardService.newCardHeader().setTitle('Email to Google Sheet'));

  var section = CardService.newCardSection().setHeader('Settings');
  section.addWidget(CardService.newTextInput()
      .setFieldName('label')
      .setTitle('Gmail Label')
      .setValue('email-to-sheet'));

  var action = CardService.newAction()
      .setFunctionName('createGoogleSheetFromEmails');
  section.addWidget(CardService.newTextButton()
      .setText('Create Google Sheet')
      .setOnClickAction(action));

  builder.addSection(section);
  return builder.build();
}

/**
 * The action handler for the "Create Google Sheet" button.
 * Fetches emails with the specified label, extracts metadata and body,
 * and saves the result to a new Google Sheet in Google Drive.
 *
 * @param {Object} e The event object from the button click.
 * @return {ActionResponse} A response to rebuild the card.
 */
function createGoogleSheetFromEmails(e) {
  var labelName = e.formInput.label;
  if (!labelName) {
    return CardService.newActionResponseBuilder()
        .setNotification(CardService.newNotification().setText("Please enter a label name."))
        .build();
  }

  var label = GmailApp.getUserLabelByName(labelName);
  if (!label) {
    return CardService.newActionResponseBuilder()
        .setNotification(CardService.newNotification().setText("Label '" + labelName + "' not found."))
        .build();
  }

  var threads = label.getThreads();
  if (threads.length === 0) {
    return CardService.newActionResponseBuilder()
        .setNotification(CardService.newNotification().setText("No emails found with the label '" + labelName + "'."))
        .build();
  }

  var sheetData = [['Afzender', 'Datum', 'Tijd', 'Onderwerp', 'Bericht']];
  // Process threads in reverse order to get chronological order of emails
  for (var i = threads.length - 1; i >= 0; i--) {
    var messages = threads[i].getMessages();
    for (var j = 0; j < messages.length; j++) {
      var message = messages[j];
      var date = message.getDate();
      sheetData.push([
        message.getFrom(),
        date.toLocaleDateString(),
        date.toLocaleTimeString(),
        message.getSubject(),
        message.getPlainBody()
      ]);
    }
  }

  if (sheetData.length <= 1) {
    return CardService.newActionResponseBuilder()
        .setNotification(CardService.newNotification().setText("No content to save."))
        .build();
  }

  var fileName = labelName + ' - ' + new Date().toISOString().slice(0, 10);
  var spreadsheet = SpreadsheetApp.create(fileName);
  var sheet = spreadsheet.getSheets()[0];
  sheet.getRange(1, 1, sheetData.length, sheetData[0].length).setValues(sheetData);

  var openLink = CardService.newOpenLink()
      .setUrl(spreadsheet.getUrl())
      .setOpenAs(CardService.OpenAs.FULL_SIZE)
      .setOnClose(CardService.OnClose.NOTHING);

  var notificationCard = CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader().setTitle('Success!'))
    .addSection(CardService.newCardSection()
      .addWidget(CardService.newTextParagraph().setText("File '" + fileName + "' created."))
      .addWidget(CardService.newTextButton().setText('Open File').setOpenLink(openLink))
    )
    .build();

  return CardService.newActionResponseBuilder()
      .setNavigation(CardService.newNavigation().pushCard(notificationCard))
      .build();
}
