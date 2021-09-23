import React, { useState } from 'react';
import Note from './Note';

export default function NotesList() {
  const [notes, setNotes] = useState([]);
  return (
    <div className="notes-list">
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
    </div>
  );
}
