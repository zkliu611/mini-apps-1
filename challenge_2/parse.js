exports.createArray = function(data) {
  var head = Object.keys(data).slice(0, 6);
  var flattenData = [];
  flattenData.push(head);
  
  var getRows = function(node) {
    let row = Object.values(node).slice(0, 6);
    flattenData.push(row);
    if (node.children) {
      for (let i = 0; i< node.children.length; i++){
        getRows(node.children[i]);
      }
    }
  }
  getRows(data);
  return flattenData;
}

exports.createCSV = function(data) {
  var csvData = "";
  for (var i = 0; i < data.length; i++){
    var line = Object.values(data[i]).join(", ");
    csvData += line + "<br>";
  }
  return csvData;

}

exports.createHTTP = (data) => {
  return (`<!DOCTYPE html>
<html>
<head>
  <title>CSV Report</title>
  <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
</head>
<body>
  <h1> CSV Report </h1>
  <form method="post" action="/csv">
    Input Data:
    <br>
    <textarea name="formData" style="width:400px; height:300px;"></textarea>
    <br>
    <input type="submit" value="Submit">
  </form>
  <div id="csv">
    ${data}
  </div>
  <script src="app.js"></script>
</body>
</html>
`)
};

