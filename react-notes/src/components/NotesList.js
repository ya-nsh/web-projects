import React from 'react';
import Note from './Note';
import AddNote from './AddNote';

export default function NotesList(props) {
  return (
    <div className="notes-list">
      {props.content.map(note => (
        <Note id={note.id} text={note.text} date={note.date} />
      ))}
      <AddNote />
    </div>
  );
}
