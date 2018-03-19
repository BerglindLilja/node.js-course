
 const fs = require('fs');
 const os = require('os');
 const _ = require('lodash');
 const notes = require('./notes.js')
 const yargs = require('yargs');

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
}

const bodyOptions = {
  describe: 'Body of the note',
  demand: true,
  alias: 'b'
}

const argv = yargs
  .command('add', 'Add a new note',{
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOptions

  })
  .command('remove', 'Remove a note', {
    title: titleOptions

  })
  .help()
  .argv;
var command = argv._[0];

if(command === 'add'){
  console.log('Adding new note');
  var note = notes.addNote(argv.title, argv.body);
  console.log(argv.title);
  if(note){
    console.log('Note created');
    notes.logNote(note);
  } else{
    console.log('Duplicate error')
  }

} else if (command === 'list'){
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} notes.`);
  allNotes.forEach((note) => notes.logNote(note));


} else if (command === 'read'){
  console.log('Reading note');
  var noteFound = notes.getNote(argv.title);
  console.log(noteFound);

  if(noteFound){
    notes.logNote(noteFound);

  } else{
    console.log('note ' + argv.title + ' not found');
  }
}else if (command === 'remove'){
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
}
else {
  console.log('Command not recognized');
}
