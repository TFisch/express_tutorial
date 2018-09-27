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

app.get('/', (request, response) => {
  // We don't need to explicitly use this handler or send a response
  // because Express is using the default path of the static assets
  // to serve this content
});

app.get('/sunsets', (request, response) => {
  response.status(200).json({ "name": "Robbie" })
});

app.get('/json', (request, response) => {
  response.status(200).json({ "name": "Robbie" });
});

// app.use(function (req, res, next) {
//   res.status(404).sendFile('/index.html')

// })

app.get('*', function (req, res) {
  res.status(404).sendFile(path.join(__dirname + '/page404.html'));
});
