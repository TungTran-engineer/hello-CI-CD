const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;
const GIT_SHA = process.env.GIT_SHA || 'local';
const BUILD_TIME = new Date().toLocaleString('vi-VN'); // Thời gian build

// Route check health
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    git_sha: GIT_SHA,
    build_time: BUILD_TIME,
  });
});

// Route chính
app.get('/', (req, res) => {
  res.send(`<!doctype html>
<html lang="vi">
<head>
  <meta charset="utf-8" />
  <title>Hello CI/CD</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: #fff;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .card {
      background: rgba(255,255,255,0.1);
      padding: 30px;
      border-radius: 15px;
      text-align: center;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      width: 350px;
      backdrop-filter: blur(10px);
    }
    h1 {
      margin-bottom: 10px;
      font-size: 2em;
    }
    p {
      margin-bottom: 15px;
      font-size: 1em;
    }
    small {
      display: block;
      margin-top: 10px;
      font-size: 0.8em;
      color: #d1d5db;
    }
    button {
      margin-top: 15px;
      padding: 10px 20px;
      background: #48bb78;
      border: none;
      border-radius: 8px;
      color: #fff;
      font-size: 1em;
      cursor: pointer;
      transition: background 0.3s ease;
    }
    button:hover {
      background: #38a169;
    }
    #msg {
      margin-top: 15px;
      font-size: 1em;
      font-weight: bold;
      color: #ffd700;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>🚀 Hello CI/CD</h1>
    <p>Triển khai bằng <strong>GitHub Actions + Docker</strong></p>
    <small><strong>Commit SHA:</strong> ${GIT_SHA}</small>
    <small><strong>Build Time:</strong> ${BUILD_TIME}</small>
    <button onclick="document.getElementById('msg').innerText='👉 Xin chào DevOps!'">✍️ Ghi thêm</button>
    <p id="msg"></p>
  </div>
</body>
</html>`);
});

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT} (GIT_SHA=${GIT_SHA})`);
});
