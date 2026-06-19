const express = require('express');

const app = express();
const ENV = process.env.NODE_ENV || 'development';

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'dp-gitops API - RM565486 - GitOps',
    environment: ENV,
    version: process.env.npm_package_version || '1.0.0',
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

module.exports = app;
