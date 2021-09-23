import React, { useState } from 'react';
import NotesList from './components/NotesList';
import { nanoid } from 'nanoid';

export default function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'First Note',
      date: '20/4/2021'
    },
    {
      id: nanoid(),
      text: 'Second Note',
      date: '10/4/2021'
    },
    {
      id: nanoid(),
      text: 'Third Note',
      date: '30/4/2021'
    }
  ]);

  return (
    <div className="App">
      <NotesList content={notes} />
    </div>
  );
}
