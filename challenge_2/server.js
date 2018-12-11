var path = require('path');
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './client')));

app.post('/cvs', (req, res) => {
  console.log('serving post request');
  res.redirect('/');
  res.status(201);
});

app.get('/cvs', (req, res) => {
  console.log('serving get request')
  res.status(200).send('hello world');
});

var PORT = 8080;
app.listen(PORT, () => console.log(`listening on port ${PORT}!`))