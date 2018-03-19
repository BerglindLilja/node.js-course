 console.log('Starting app.js');

 const fs = require('fs');
 const os = require('os');
 const _ = require('lodash');
 const notes = require('./notes.js')
 const yargs = require('yargs');

 const argv = yargs.argv;

var command = argv._[0];
console.log('command:', command);
console.log('Yargs', argv);

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
  console.log('Listing all notes');
  notes.getAll();
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
