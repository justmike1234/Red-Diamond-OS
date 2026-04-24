/**
 * RDAOS Lead Sync
 * Receives POST data from n8n and appends to the Red Diamond Master Sheet
 */
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Leads");
  var data = JSON.parse(e.postData.contents);
  
  // Appends: Date, Name, Phone, Email, Source, Status
  sheet.appendRow([
    new Date(), 
    data.name, 
    data.phone, 
    data.email, 
    data.source, 
    "New"
  ]);
  
  return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}
