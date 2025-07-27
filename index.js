const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/oauth/callback', (req, res) => {
  const code = req.query.code;
  const state = req.query.state;
  res.send(`OAuth callback received. Code: ${code}, State: ${state}`);
});

app.get('/', (req, res) => {
  res.send('OAuth handler is running.');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
