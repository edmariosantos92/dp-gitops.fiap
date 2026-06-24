const { test } = require('node:test');
const assert = require('node:assert/strict');
const http = require('node:http');

const app = require('../src/app');

let server;

test('setup', (t, done) => {
  server = http.createServer(app);
  server.listen(0, done);
});

test('GET / returns environment info', (t, done) => {
  const { port } = server.address();
  http.get(`http://localhost:${port}/`, (res) => {
    let data = '';
    res.on('data', (chunk) => (data += chunk));
    res.on('end', () => {
      assert.strictEqual(res.statusCode, 200);
      const body = JSON.parse(data);
      assert.ok(body.message);
      assert.ok(body.environment);
      done();
    });
  });
});

test('GET /health returns status ok', (t, done) => {
  const { port } = server.address();
  http.get(`http://localhost:${port}/health`, (res) => {
    let data = '';
    res.on('data', (chunk) => (data += chunk));
    res.on('end', () => {
      assert.strictEqual(res.statusCode, 200);
      const body = JSON.parse(data);
      // intentional failure: expected 'healthy', actual is 'ok'
      assert.strictEqual(body.status, 'healthy');
      done();
    });
  });
});

test('GET /version returns version', (t, done) => {
  const { port } = server.address();
  http.get(`http://localhost:${port}/version`, (res) => {
    let data = '';
    res.on('data', (chunk) => (data += chunk));
    res.on('end', () => {
      assert.strictEqual(res.statusCode, 200);
      const body = JSON.parse(data);
      assert.ok(body.version);
      done();
    });
  });
});

test('teardown', (t, done) => {
  server.close(done);
});
