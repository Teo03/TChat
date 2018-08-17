const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;

const bodyParser = require('body-parser');
const cors = require('cors');
  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
  
// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));
app.use(cors());   

// ROUTING //
const routes = require('./routes/routes.js');
app.use('/', routes);

var http = require('http');
var server = http.Server(app);

  // Answer API requests.
  app.get('/api', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send('{"message":"Hello from the custom server!"}');
  });

  // All remaining requests return the React app, so it can handle routing.
  app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
  });

  server.listen(PORT, function () {
    console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
  });
