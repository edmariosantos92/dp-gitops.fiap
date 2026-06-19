const express = require('express');
const { version: pkgVersion } = require('../package.json');

const app = express();
const ENV = process.env.APP_ENV || process.env.NODE_ENV || 'development';
const version = process.env.IMAGE_TAG || pkgVersion;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'dp-gitops API - RM565486',
    environment: ENV,
    version,
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

module.exports = app;
