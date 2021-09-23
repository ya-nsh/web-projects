import React from 'react';
import Note from './Note';

export default function AddNote() {
  return (
    <div className="note add">
      <textarea cols="11" rows="11" placeholder="Add a new note"></textarea>
      <div className="note--footer">
        <small>200 Remaining</small>
        <button className="note--save">Save</button>
      </div>
    </div>
  );
}
