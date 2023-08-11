const express = require('express');
const path = require('path');
// Import our modular routers for /tips and /feedback
//const notesRouter = require('/notes');


const app = express();
const PORT = 3001;
//app.use('/notes', notesRouter);

app.get('/', (req, res) =>
res.sendFile(path.join(__dirname, 'public/index.html')));

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html')))
;

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
module.exports = app;