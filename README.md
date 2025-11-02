# Email to Markdown Gmail Add-on

This Gmail Add-on allows you to select all emails with a specific label, convert them sequentially into a single Markdown file, and save that file to your Google Drive.

## How to Install

As this is a custom script, you need to install it manually in your Google account.

1.  **Open Google Apps Script:** Go to [script.google.com](https://script.google.com).
2.  **Create a New Project:** Click on "New project".
3.  **Copy the Code:**
    *   Delete any content in the `Code.gs` file and paste the content from the `Code.gs` file of this repository.
    *   Click on **File > New > Script file** and name it `appsscript`. Then, copy the content of `appsscript.json` from this repository and paste it into this new file. **Important:** After pasting, delete the `.gs` extension from the filename in the editor, so it's just `appsscript.json`.
4.  **Save the Project:** Click the save icon and give your project a name (e.g., "Email to Markdown").
5.  **Install the Add-on:**
    *   Refresh the page.
    *   Go to **Publish > Deploy from manifest...**.
    *   A dialog will appear showing the deployment. Click **Install add-on**.
    *   A confirmation will show that the add-on has been installed.

## How to Use

1.  **Open Gmail:** Go to your Gmail inbox. You may need to refresh the page to see the add-on.
2.  **Find the Add-on:** On the right-hand side panel, you should see the "Email to Markdown" logo (it will be a default puzzle piece icon since we used a placeholder logo URL). Click on it.
3.  **Authorize the Add-on:** The first time you use it, Google will ask for your permission to access your emails and Google Drive. You must grant these permissions for the add-on to work.
4.  **Enter a Label:** In the add-on's interface, enter the exact name of the Gmail label you want to process (e.g., `email-to-md`).
5.  **Create the File:** Click the "Create Markdown File" button.
6.  **Confirmation:** After a few moments, a success card will appear.
7.  **Open the File:** Click the "Open File" button to view your newly created Markdown file in Google Drive. The file will be named based on the label and the date (e.g., `email-to-md - 2023-10-27.md`).

## Permissions Required

This add-on requires the following permissions:

*   **Read your Gmail:** To find and read the content of the emails with the specified label.
*   **Create files in your Google Drive:** To save the final Markdown file.

Your data is not sent anywhere else and is only used within your Google account for the functionality of this add-on.
