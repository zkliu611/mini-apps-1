var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var parseData = require('./parse');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './client')));

app.post('/csv', (req, res) => {
  console.log('serving post request');
  var rawData = JSON.parse(req.body.formData);
  var flattenData = parseData.createArray(rawData);
  var csvData = parseData.createCSV(flattenData);
  var csvHTTP = parseData.createHTTP(csvData);
  res.status(201).send(csvHTTP);
});

app.get('/csv', (req, res) => {
  console.log('serving get request')
  res.redirect('/');
  res.status(200).send();
});

var PORT = 8080;
app.listen(PORT, () => console.log(`listening on port ${PORT}!`))