const express = require('express');
const app = express();

// Trust proxy to get IP from headers (e.g. if behind Nginx or Heroku)
app.set('trust proxy', true);

// Endpoint to return the IP address
app.get('/', (req, res) => {
  const ip = req.ip || req.connection.remoteAddress;
  res.json({ ip });
});

// Optional: Health check
app.get('/health', (req, res) => {
  res.send('OK');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});