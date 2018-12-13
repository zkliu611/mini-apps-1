var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client/dist')))

app.post('/', (req, res) => {
  console.log('serving post request');
  res.status(201).end();
});

app.get('/', (req, res) => {
  console.log('serving get request');
  res.status(200).send('hello from get request');
})

var PORT = 8080;
app.listen(PORT, () => console.log(`listening on port ${PORT}!`));

