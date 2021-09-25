import React, { useState } from 'react';
import Note from './Note';

export default function AddNote({ handleAddNote }) {
  let textLimit = 150;
  const [text, setText] = useState('');

  const textHandler = e => {
    if (textLimit - e.target.value.length >= 0) setText(e.target.value);
  };

  const saveHandler = e => {
    if (text.trim().length > 0) {
      handleAddNote(text);
    }

    setText('');
  };

  return (
    <div className="note add">
      <textarea
        cols="11"
        rows="11"
        placeholder="Add a new note"
        onChange={textHandler}
        value={text}
      ></textarea>
      <div className="note__footer">
        <small>{textLimit - text.length} Remaining</small>
        <button className="note--save" onClick={saveHandler}>
          Save
        </button>
      </div>
    </div>
  );
}
