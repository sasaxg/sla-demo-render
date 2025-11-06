const express = require('express');
const client = require('prom-client');
const app = express();
const register = new client.Registry();

// Thu thập metrics mặc định (CPU, memory, event loop, etc.)
client.collectDefaultMetrics({ register });

// Histogram đo latency
const httpRequestDuration = new client.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'url'],
  buckets: [0.05, 0.1, 0.2, 0.3, 0.4, 0.5, 1],
  registers: [register]
});

// Health check
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// API endpoint
app.get('/api', async (req, res) => {
  const end = httpRequestDuration.startTimer({ method: 'GET', url: '/api' });
  
  // Bỏ comment dòng dưới để test latency > 500ms
  // await new Promise(r => setTimeout(r, Math.random() * 1000 + 500));
  
  end();
  res.json({ data: 'Hello from SLA Demo' });
});

// Metrics endpoint cho Prometheus
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

// BẮT BUỘC CHO RENDER
const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`App running on port ${PORT}`);
});
