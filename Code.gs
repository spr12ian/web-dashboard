function doGet() {
  return HtmlService.createTemplateFromFile('index')
      .evaluate()
      .setTitle('Web Dashboard')
      //.setFaviconUrl('YOUR_FAVICON_URL')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getData() {
  // Web Dashboard Data spreadsheet
  // https://docs.google.com/spreadsheets/d/12X4piCtYzUubCQhfq-jDPIG0ptCtA-amBRR2WLrXiiI
  const webDashboardData = '12X4piCtYzUubCQhfq-jDPIG0ptCtA-amBRR2WLrXiiI'

  return SpreadsheetApp
      .openById(webDashboardData)
      .getActiveSheet()
      .getDataRange()
      .getValues()
}

// Helper function to include other files
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}