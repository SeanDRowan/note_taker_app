
const routes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
//util functions from fsUtils.js in 28 -miniproject
const {
  readFromFile,
  readAndAppend,
  writeToFile } = require('../helpers/FsUtils');


// GET Route for retrieving all the notes
routes.get('/', (req, res) => {
   readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
   
});



// DELETE Route for a specific note id
routes.delete('/:id', (req, res) => {
  const noteId = req.params.id;
  readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
      // Make a new array of all notes except the one with the ID provided in the URL
      const result = json.filter((note) => note.id !== noteId);

      // Save that array to the filesystem
      writeToFile('./db/db.json', result);

      // Respond to the DELETE request
      res.json(`Item ${noteId} has been deleted`);
    });
});

// POST Route for a new note
routes.post('/', (req, res) => {
  console.log(req.body);
// create body of new note
  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuidv4(), 
    };
// read db.json and add newnote to it
    readAndAppend(newNote, './db/db.json');
    res.json(`note added`);
  } else {
    res.error('Error in adding note');
  }
});

// GET Route for a specific note
routes.get('/:id', (req, res) => {
  const noteId = req.params.id;
  // read db.json look for note.id equal to noteId
  readFromFile('./db/db.json')
    .then((data) => JSON.parse(data)) 
    .then((json) => {
      const result = json.filter((note) => note.id === noteId)
         res.json(result)
    });
});

module.exports = routes;
