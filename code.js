function onEdit() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  
  //Loop through every sheet value
  for(var i = 0; i < sheetVals.length; i++){
    var sheetID  = sheetVals[i][0],
        frontStr = sheetVals[i][1],
        backStr  = sheetVals[i][2],
        IDcol    = sheetVals[i][3],
        editCol  = sheetVals[i][4];
    
    var offset = IDcol - editCol;
    
    if(sheet.getName() === sheetID){
      var date = new Date().valueOf();
      var newID = frontStr+date+backStr;   
      
      //Check the location of the active cell
      // var selectedCell = ss.getActiveCell();
      // var selectedCell = ss.getActiveCell();
      // if( selectedCell.getColumn() === editCol) {
      
      //   //Update the ID Column
      //   var cellToChange = selectedCell.offset(0,offset);
      //   cellToChange.setValue(newID);
      // };
    };
  };
 return newID;
 };
// ---------------------------------------------------------------

function showResult() {
var widget = HtmlService.createHtmlOutputFromFile("Form.html");
  widget.setWidth(700);
  widget.setHeight(450);
  SpreadsheetApp.getUi().showModelessDialog(widget," ");
}

function addFromValueToSheet(form) {
  var formSheet = form.sheetlist_1;
  // var cell_id = onEdit();
  var ss_add = [form.iname,form.firstname,form.academic_1,form.phonenumber,form.note,form.comment];
  var appendToSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(formSheet);
  appendToSheet.appendRow(ss_add);

}

// find data from SpreadSheets cell
function findContentsInSheets(form) {
  var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(form.sheetlist);
  var textToName = form.name;
  var textToAcademic = form.academic;
    // var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
    // var textToName = "";
    // var textToAcademic = "sdfsdf";
  var data = ss.getDataRange().getValues();
  var data_1 = [];

  for(var x=1;x<data.length; x++)
  {
    
    if(data[x][0].toString().indexOf(textToName)>=0 && data[x][2]===textToAcademic)
    { 
      data_1.push(data[x]);
    }
  }
  // console.log(data_1);
  
return data_1;
}

// function to get the number of spreadsheets (sheet1~sheet15)
function countSheets() {
  return SpreadsheetApp.getActive().getSheets().length;
}
// -------------------------getAllSheetsName-----------------
function allSheetsName() {
  let ss = SpreadsheetApp.getActive();
  let sheets = ss.getSheets();
  let sheetNames = [];
  sheets.forEach(function (sheet) {
    sheetNames.push(sheet.getName());
  });
  sheetNames.shift();
  return sheetNames;
}


// function goSelectSheets(formval,val) {
//   var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(formval.sheetlist_1);
//   var sData = sheet.getDataRange().getValues();
//   for(var i=1;i<sData.length;i++){
//     if(data[i][0]===val)
//     var cell_range = "A"+i;
//     var cell = sheet.getRange(cell_range);
//     sheet.setCurrentCell(cell);
//   }
// }


