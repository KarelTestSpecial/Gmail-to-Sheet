# Email to Google Sheet Gmail Add-on

**English** | [Nederlands](#nederlands)

This Gmail Add-on allows you to select emails with a specific label and export key data (sender, date, time, subject, and plain text body) to a new Google Sheet file in your Google Drive.

## Installation

As this is a custom script, you need to install it manually in your Google account.

1.  **Open Google Apps Script:** Go to [script.google.com](https://script.google.com).
2.  **Create a New Project:** Click on "New project".
3.  **Copy the Code:**
    *   Delete any existing code in the `Code.gs` file and paste the content from the `Code.gs` file of this repository.
    *   Click the `+` icon next to "Files" and choose "JSON". Name the file `appsscript` and confirm. Then, paste the content of `appsscript.json` from this repository into this new file.
4.  **Save the Project:** Click the save icon and give your project a name (e.g., "Email to Google Sheet").
5.  **Deploy the Add-on:**
    *   Refresh the page.
    *   Go to **Deploy > New deployment**.
    *   Select "Gmail add-on" as the deployment type.
    *   Give the deployment a name and click "Deploy". Google will now ask for your permission. Follow the steps to authorize the add-on.

## How to Use

1.  **Open Gmail:** Go to your Gmail inbox. You may need to refresh the page to see the add-on.
2.  **Find the Add-on:** On the right-hand side panel, you should see the "Email to Google Sheet" logo (it will be a default puzzle piece icon). Click on it.
3.  **Authorize the Add-on:** The first time you use it, Google will ask for your permission to access your emails, Google Drive, and Spreadsheets. You must grant these permissions for the add-on to work.
4.  **Enter a Label:** In the add-on's interface, enter the exact name of the Gmail label you want to process (the default is `email-to-sheet`).
5.  **Create the File:** Click the "Create Google Sheet" button.
6.  **Confirmation:** After a few moments, a success card will appear.
7.  **Open the File:** Click the "Open File" button to view your newly created Google Sheet file in Google Drive. The file will be named based on the label and the creation date (e.g., `email-to-sheet - 2023-10-27`).

## Permissions Required

This add-on requires the following permissions:

*   **Read your Gmail messages:** To find and read the content of the emails with the specified label.
*   **Full access to your Google Drive:** The script requires broad Google Drive permission to create new files. While the permission is broad, the script's code **only** creates new files and does not read, modify, or delete any of your existing files.
*   **Create and manage Google Spreadsheets:** To write the data to a new Google Sheet file.

Your data is not sent anywhere else and is only used within your Google account for the functionality of this add-on.

---

## Nederlands

[English](#email-to-google-sheet-gmail-add-on) | **Nederlands**

Deze Gmail Add-on stelt je in staat om e-mails met een specifiek label te selecteren en de belangrijkste gegevens (afzender, datum, tijd, onderwerp en de platte tekst van het bericht) te exporteren naar een nieuw Google Sheet-bestand in je Google Drive.

### Installatie

Omdat dit een aangepast script is, moet je het handmatig installeren in je Google-account.

1.  **Open Google Apps Script:** Ga naar [script.google.com](https://script.google.com).
2.  **Maak een nieuw project:** Klik op "Nieuw project".
3.  **Kopieer de code:**
    *   Verwijder alle bestaande code in het `Code.gs`-bestand en plak de inhoud van het `Code.gs`-bestand uit deze repository erin.
    *   Klik op het `+`-icoon naast "Bestanden" en kies "JSON". Geef het bestand de naam `appsscript` en bevestig. Plak vervolgens de inhoud van `appsscript.json` uit deze repository in dit nieuwe bestand.
4.  **Sla het project op:** Klik op het opslaan-icoon (diskette) en geef je project een naam (bijv. "E-mail naar Google Sheet").
5.  **Installeer de add-on:**
    *   Vernieuw de pagina.
    *   Ga naar **Implementeren > Nieuwe implementatie**.
    *   Kies als type "Gmail-add-on".
    *   Geef de implementatie een naam en klik op "Implementeren". Google zal je nu om toestemming vragen. Volg de stappen om de add-on te autoriseren.

### Gebruik

1.  **Open Gmail:** Ga naar je Gmail-inbox. Het kan zijn dat je de pagina moet vernieuwen om de add-on te zien.
2.  **Vind de add-on:** In het rechterzijpaneel zou je het logo van "Email to Google Sheet" moeten zien (dit is een standaard puzzelstuk-icoon). Klik erop.
3.  **Autoriseer de add-on:** De eerste keer dat je de add-on gebruikt, zal Google je om toestemming vragen om je e-mails te lezen en toegang te krijgen tot je Google Drive en Spreadsheets. Je moet deze toestemmingen verlenen om de add-on te laten werken.
4.  **Voer een label in:** In de interface van de add-on voer je de exacte naam in van het Gmail-label dat je wilt verwerken (de standaardwaarde is `email-to-sheet`).
5.  **Maak het bestand aan:** Klik op de knop "Create Google Sheet".
6.  **Bevestiging:** Na enkele ogenblikken verschijnt er een succesbericht.
7.  **Open het bestand:** Klik op de knop "Open File" om je nieuw aangemaakte Google Sheet-bestand in Google Drive te bekijken. Het bestand krijgt een naam op basis van het label en de aanmaakdatum (bijv. `email-to-sheet - 2023-10-27`).

### Vereiste Toestemmingen

Deze add-on vereist de volgende toestemmingen:

*   **Je Gmail-berichten lezen:** Om de inhoud van de e-mails met het opgegeven label te kunnen vinden en lezen.
*   **Volledige toegang tot je Google Drive:** Het script heeft brede Google Drive-toestemming nodig om nieuwe bestanden te kunnen aanmaken. Hoewel de toestemming breed is, maakt de code van het script **enkel** nieuwe bestanden aan en leest, wijzigt of verwijdert het geen bestaande bestanden.
*   **Google Spreadsheets aanmaken en beheren:** Om de gegevens te kunnen wegschrijven naar een nieuw Google Sheet-bestand.

Je gegevens worden nergens anders naartoe gestuurd en worden alleen binnen je eigen Google-account gebruikt voor de functionaliteit van deze add-on.
