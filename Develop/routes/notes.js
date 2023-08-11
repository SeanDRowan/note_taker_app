const app =require('../../routes/server')

app.get('/notes', (req, res) =>
  res.sendFile('./notes.html'))
;