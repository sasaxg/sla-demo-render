const express = require('express');
const client = require('prom-client');
const app = express();
const register = new client.Registry();
client.collectDefaultMetrics({ register });

const httpRequestDuration = new client.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'url'],
  buckets: [0.05, 0.1, 0.2, 0.3, 0.4, 0.5, 1],
  registers: [register]
});

app.get('/health', (req, res) => res.status(200).send('OK'));

app.get('/api', async (req, res) => {
  const end = httpRequestDuration.startTimer({ method: 'GET', url: '/api' });
  // await new Promise(r => setTimeout(r, Math.random() * 450 + 50)); // bỏ comment để test latency
  end();
  res.json({ data: 'Hello from SLA Demo' });
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

app.listen(8080, () => console.log('App running on port 8080'));