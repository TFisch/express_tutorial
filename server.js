const express = require('express');
const app = express();
var path = require("path");

const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
};

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
};

app.use(urlLogger, timeLogger);
app.use(express.static('public'))

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
});

app.get('/json', (request, response) => {
  response.status(200).json(require('./data'));
});

app.get('*', function (req, res) {
  res.status(404).sendFile(path.join(__dirname + '/public/page404.html'));
});
