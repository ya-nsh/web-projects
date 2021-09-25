import React, { useState, useEffect } from 'react';
import NotesList from './components/NotesList';
import { nanoid } from 'nanoid';
import Search from './components/Search';
import Header from './components/Header';

export default function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'Hello, this is the first note',
      date: '20/4/2021'
    },
    {
      id: nanoid(),
      text: 'Try creating your own note!',
      date: '10/4/2021'
    },
    {
      id: nanoid(),
      text: 'You can also delete Notes',
      date: '30/4/2021'
    }
  ]);

  const [searchText, setSearchText] = useState('');
  const [colorChange, setColorChange] = useState(false);

  useEffect(() => {
    const savedSession = JSON.parse(localStorage.getItem('notes-data'));
    if (savedSession) {
      setNotes(savedSession);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes-data', JSON.stringify(notes));
  }, [notes]);

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
    <div className={`${colorChange && 'color-change'}`}>
      <div className="App">
        <Header handleColorChange={setColorChange} />
        <Search handleSearch={setSearchText} />
        <NotesList
          content={notes.filter(note =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}
