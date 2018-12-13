var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public')));

app.post('/', (req, res) => {
  console.log('serving post request');
  console.log(req.body);
  if (req.body.page === 4) {
    writeData(req.body.data);
  }
  res.status(201).end();
})

app.get('/', (req, res) => {
  console.log('serving get request')
  res.status(200).send('hello from get');
})

var PORT = 8080;
app.listen(PORT, () => console.log(`listening on port ${PORT}!`))
