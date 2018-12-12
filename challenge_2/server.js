var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './client')));




app.post('/csv', (req, res) => {
  console.log('serving post request');
  var data = JSON.parse(req.body.formData);
  var heads = Object.keys(data).slice(0, 6);
  var rows = [];
  var getRows = function(node) {
    let row = Object.values(node).slice(0, 6);
    rows.push(row);
    if (node.children) {
      for (let i = 0; i< node.children.length; i++){
        getRows(node.children[i]);
      }
    }
  }
  getRows(data);
  console.log(rows);
  res.redirect('/');
  res.status(201).end();
});

app.get('/csv', (req, res) => {
  console.log('serving get request')
  res.redirect('/');
  res.status(200).send();
});

var PORT = 8080;
app.listen(PORT, () => console.log(`listening on port ${PORT}!`))