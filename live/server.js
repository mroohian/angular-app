// Get dependencies
const compression = require('compression');
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Load server configuration
const config = require('./config');

// Load Mongodb client
const mongodbClient = require('./server/mongodb/mongodbClient')(config);

// Get our API routes
const api = require('./server/routes/api')(mongodbClient);

const app = express();

// Compress response
app.use(compression());

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, config.distDir)));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, config.distDir, config.index));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));