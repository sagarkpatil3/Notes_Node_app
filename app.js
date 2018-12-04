const _ = require('lodash');
const fs = require('fs');
const yargs = require('yargs');

const titleOptions = {
  describe: 'Title of Note',
  demand: true,
  alias: 't'
}

const bodyOptions = {
  describe: 'Body for the Note',
  demand: true,
  alias: 'b'
}

const notes = require('./notes.js');
const argv = yargs
  .command('add', 'Add a new Note',{
    title: titleOptions,
    body: bodyOptions,
  })
  .command('list', 'List all Notes')
  .command('read',' Read a Note',{
    title: titleOptions
  })
  .command('remove', 'Remove a Note from Notes',{
    title: titleOptions
  })
  .help()
  .argv;

let command = process.argv[2];

// console.log('Command :',command);
// console.log('process:', process.argv);
// console.log('yargs:',argv);

if(command === 'add'){
  var note = notes.addNote(argv.title, argv.body);
  if(note) {
    console.log("note created");
    notes.logNotes(note);
  } else {
    console.log("note title taken");
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} notes(s).`)
  allNotes.forEach((note) => notes.logNotes(note));
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if(note) {
    console.log('Note found');
    notes.logNotes(note);
  } else {
    console.log('Note not found');
  }
}  else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note Removed' : 'Note Not Found';
  console.log(message);
} else {
  console.log('command not recognised')
}
