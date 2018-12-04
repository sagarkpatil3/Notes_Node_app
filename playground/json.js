// var obj = {
//   name:'Sagar'
// };
//
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

//
// var personString = '{"name":"sagar","age":25}';
// var person = JSON.parse(personString);
//
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

let originalNote = {
  title:'some title',
  body:'some body'
};

let originalNoteString = JSON.stringify(originalNote)

fs.writeFileSync('notes.json', originalNoteString)

let noteString = fs.readFileSync('notes.json')
let note = JSON.parse(noteString)

console.log(originalNoteString)
console.log(noteString)
console.log(note.title)
