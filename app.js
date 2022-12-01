const path = require('path');
const express = require('express');
const xss = require('xss-clean');
const compression = require('compression');
const cors = require('cors');

const formRouter = require('./routes/formRouter');

// Start express app
const app = express();

// 1) GLOBAL MIDDLEWARES
// Implement CORS
app.use(cors());

app.options('*', cors());

// Serving static files
app.use(express.static(path.join(__dirname, 'build', 'index.html')));

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Data sanitization against XSS
app.use(xss());

app.use(compression());

// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
app.use('/api/contact', formRouter);

module.exports = app;
