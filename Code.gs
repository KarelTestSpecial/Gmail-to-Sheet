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
  builder.setHeader(CardService.newCardHeader().setTitle('Email to Markdown'));

  var section = CardService.newCardSection().setHeader('Settings');
  section.addWidget(CardService.newTextInput()
      .setFieldName('label')
      .setTitle('Gmail Label')
      .setValue('email-to-md'));

  var action = CardService.newAction()
      .setFunctionName('createMarkdownFileFromEmails');
  section.addWidget(CardService.newTextButton()
      .setText('Create Markdown File')
      .setOnClickAction(action));

  builder.addSection(section);
  return builder.build();
}

/**
 * The action handler for the "Create Markdown File" button.
 * Fetches emails with the specified label, converts them to Markdown,
 * and saves the result to a new file in Google Drive.
 *
 * @param {Object} e The event object from the button click.
 * @return {ActionResponse} A response to rebuild the card.
 */
function createMarkdownFileFromEmails(e) {
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

  var markdownContent = '';
  // Process threads in reverse order to get chronological order of emails
  for (var i = threads.length - 1; i >= 0; i--) {
    var messages = threads[i].getMessages();
    for (var j = 0; j < messages.length; j++) {
      var message = messages[j];
      markdownContent += '# ' + message.getSubject() + '\n\n';
      markdownContent += '**From:** ' + message.getFrom() + '\n';
      markdownContent += '**Date:** ' + message.getDate() + '\n\n';
      markdownContent += message.getPlainBody() + '\n\n';
      markdownContent += '---\n\n';
    }
  }

  if (markdownContent === '') {
    return CardService.newActionResponseBuilder()
        .setNotification(CardService.newNotification().setText("No content to save."))
        .build();
  }

  var fileName = labelName + ' - ' + new Date().toISOString().slice(0, 10) + '.md';
  var file = DriveApp.createFile(fileName, markdownContent, 'text/markdown');

  var openLinkAction = CardService.newAction().setOpenLink(
      CardService.newOpenLink()
          .setUrl(file.getUrl())
          .setOpenAs(CardService.OpenAs.FULL_SIZE)
          .setOnClose(CardService.OnClose.NOTHING)
  );

  var notificationCard = CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader().setTitle('Success!'))
    .addSection(CardService.newCardSection()
      .addWidget(CardService.newTextParagraph().setText("File '" + fileName + "' created."))
      .addWidget(CardService.newTextButton().setText('Open File').setOnClickAction(openLinkAction))
    )
    .build();

  return CardService.newActionResponseBuilder()
      .setNavigation(CardService.newNavigation().pushCard(notificationCard))
      .build();
}
