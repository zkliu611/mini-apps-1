var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './client')));

app.post('/csv', (req, res) => {
  console.log('serving post request');
  console.log(req.body.formData);
  res.redirect('/');
  res.status(201);
  res.end();
});

app.get('/csv', (req, res) => {
  console.log('serving get request')
  console.log(req.query.formData)
  res.redirect('/');
  res.status(200).send();
});

var PORT = 8080;
app.listen(PORT, () => console.log(`listening on port ${PORT}!`))