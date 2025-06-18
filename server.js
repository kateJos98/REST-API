const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('REST API running! Go to /hello');
});


app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from REST API!' });
});

app.listen(3000, () => console.log('REST API on http://localhost:3000'));
