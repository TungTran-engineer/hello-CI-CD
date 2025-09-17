// index.js
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;
const GIT_SHA = process.env.GIT_SHA || 'local';

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.get('/', (req, res) => {
  res.send(`<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Hello CI/CD</title>
</head>
<body style="font-family: Arial, Helvetica, sans-serif; display:flex;align-items:center;justify-content:center;height:100vh;background:#f6f8fa;">
  <div style="text-align:center;">
    <h1 style="color:#2b6cb0;margin:0 0 8px;">Hello CI/CD</h1>
    <p style="margin:0 0 6px;">This site was deployed via GitHub Actions + Docker</p>
    <small style="color:#666">Build / Commit: ${GIT_SHA}</small>
  </div>
</body>
</html>`);
});

app.listen(PORT, () => {
  console.log(`Hello CI/CD app listening on port ${PORT} (GIT_SHA=${GIT_SHA})`);
});
