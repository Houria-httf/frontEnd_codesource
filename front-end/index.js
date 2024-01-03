const express = require('express')

const path = require('path');
const PORT  ='4200';
const HOST ='http://localhost';

const app = express()

app.use('/',express.static(path.join(__dirname, 'angular')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'angular','browser', 'index.html'));
});

app.listen(PORT, ()=>{
 
  console.log(`server running at http://localhost:${PORT}`)
});