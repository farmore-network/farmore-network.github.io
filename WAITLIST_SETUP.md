# Waitlist → Google Sheet setup

The waitlist form at `/waitlist` posts submissions straight into a Google Sheet
you own, using a free Google Apps Script Web App. No third-party service, no
backend to host. Setup takes about 5 minutes.

## What gets collected

Each submission becomes one row:

| Timestamp | Name | Email | Desired handle | Joining as | What caught their attention |
| --------- | ---- | ----- | -------------- | ---------- | --------------------------- |

## Steps

1. **Create the sheet.** In Google Drive → **New → Google Sheets**. Name it
   e.g. `Farmore Waitlist`. (The script adds the header row for you.)

2. **Open the script editor.** In the sheet: **Extensions → Apps Script**.

3. **Paste the code below**, replacing anything already there, and click **Save**.

4. **Deploy.** Click **Deploy → New deployment**.
   - Click the gear ⚙ → select type **Web app**.
   - **Description:** `Farmore waitlist`
   - **Execute as:** `Me`
   - **Who has access:** `Anyone`
   - Click **Deploy**, then **Authorize access** and approve the permissions
     (it only touches this one spreadsheet).

5. **Copy the Web app URL.** It ends in `/exec`, like
   `https://script.google.com/macros/s/AKfy…/exec`.

6. **Plug it in.** Paste that URL into `WAITLIST_ENDPOINT` at the top of
   [`src/components/WaitlistForm.tsx`](src/components/WaitlistForm.tsx) — or just
   send it to me and I'll drop it in. Then deploy the site.

> **Editing the script later?** Re-deploy with **Manage deployments → edit ✎ →
> Version: New version → Deploy**, or new code won't go live.

## The script

```javascript
// Farmore waitlist — Google Apps Script Web App
// Appends each website submission as a row in this Sheet.

const SHEET_NAME = 'Waitlist';

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
    const sheet = getSheet_();
    const data = JSON.parse((e && e.postData && e.postData.contents) || '{}');

    sheet.appendRow([
      new Date(),
      data.name || '',
      data.email || '',
      data.handle || '',
      data.role || '',
      data.attention || '',
    ]);

    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      'Timestamp',
      'Name',
      'Email',
      'Desired handle',
      'Joining as',
      'What caught their attention',
    ]);
  }
  return sheet;
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## Notes

- The form submits with `mode: "no-cors"`, so the browser can't read the
  response — that's expected. The row is still written to the sheet. The site
  shows a success message as long as the request leaves the browser.
- To get an email when someone joins, add a Sheet **Notification rule**
  (Tools → Notification settings) or extend `doPost` to call `MailApp`.
- The endpoint is public by design. If spam becomes an issue, add a honeypot
  field or a simple shared token — ask and I'll wire it up.
