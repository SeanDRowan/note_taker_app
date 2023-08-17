const express = require('express');

const notesRouter = require('./notes');
//const idRouter = require('./notes')

const app = express();


app.use('/notes', notesRouter);
//app.use('/notes/:note_id', idRouter)




module.exports = app;