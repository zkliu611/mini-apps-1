var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')));

app.post('/', (req, res) => {

})

app.get('/', (req, res) => {
  
})

var PORT = 8080;
app.listen(PORT, () => console.log(`listening on port ${PORT}!`))
