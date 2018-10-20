console.log('starting notes.js');

const fs = require('fs');


const fetchNotes = () => {
 try{
    const notesString = fs.readFileSync('Notes.json');
    return JSON.parse(notesString);
 }catch(e){
   return []
 }
  
}

const saveNotes = (notes) => {
   fs.writeFileSync('Notes.json',JSON.stringify(notes))
}

var addNote = (title, body) => {
    console.log(`adding note ${title} ${body}`);
    let notes = fetchNotes();
    let newNote = {
        title, body
    }

    let duplicateNotes = notes.filter((note) => note.title === title);
    if(duplicateNotes.length === 0){
        notes.push(newNote);
        saveNotes(notes);
        return newNote
    }

    return null;
}

var getNote = title => {
    const notes = fetchNotes();
    let note = null;
    if(notes && notes.length > 0){
      note  =  notes.find((obj) => {
            return obj.title === title
        });
    }
    return note;
}


module.exports = {
    addNote,
    getNote
}