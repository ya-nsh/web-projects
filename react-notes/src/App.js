import React, { useState } from 'react';
import NotesList from './components/NotesList';
import { nanoid } from 'nanoid';
import Search from './components/Search';

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

  const [searchText, setSearchText] = useState('');
  const addNote = text => {
    const date = new Date().toLocaleDateString();
    const newNote = {
      id: nanoid(),
      text,
      date
    };

    setNotes([...notes, newNote]);
  };

  const deleteNote = id => {
    const filteredNotes = notes.filter(note => note.id !== id);
    setNotes(filteredNotes);
  };

  return (
    <div className="App">
      <Search handleSearch={setSearchText} />
      <NotesList
        content={notes.filter(note =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}
