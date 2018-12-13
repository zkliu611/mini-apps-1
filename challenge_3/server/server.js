var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var controller = require('./controller.js');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './../public')));

app.post('/', (req, res) => {
  console.log('serving post request');
  if (req.body.page === 4) {
    controller.addData(req.body.data)
  }
  res.status(201).end();
})

app.get('/', (req, res) => {
  console.log('serving get request')
  res.status(200).send('hello from get request');
})

var PORT = 8080;
app.listen(PORT, () => console.log(`listening on port ${PORT}!`))
