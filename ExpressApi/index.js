const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// CORS 설정 추가
app.use(cors());

app.get('/weatherforecast', (req, res) => {
  res.json([
    { date: new Date().toISOString(), temperatureC: 25, summary: "Warm" },
    { date: new Date().toISOString(), temperatureC: 28, summary: "Hot" },
    { date: new Date().toISOString(), temperatureC: 28, summary: "Hot" },
    { date: new Date().toISOString(), temperatureC: 30, summary: "Rain" },
    { date: new Date().toISOString(), temperatureC: 14, summary: "Cold" }
  ]);
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});