const express = require('express');
const api = require('./routes/index');
const path = require('path');
const PORT = 3001;
const app = express();
;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes for api data
app.use('/api', api);
app.use(express.static('public'));

//routes for html pages
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html')))
;

app.get('*',(req, res) =>
res.sendFile(path.join(__dirname, 'public/index.html'))); 


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
