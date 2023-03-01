const express = require('express');

const app  = express();

const PORT = process.env.PORT | 8080;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.get('/api/login', (req, res) => {
  return res.status(200).json({ 
    status: 'success',
    elements: {
        token: 'AT',
        timeExpired: Date.now() + 60000
    }
   })
})

app.listen(PORT, (req, res) => {
  console.log(`Server is running on PORT :: ${PORT}`)
})