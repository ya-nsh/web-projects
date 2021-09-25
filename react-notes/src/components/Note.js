import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

export default function Note({ id, text, date, handleDeleteNote }) {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note__footer">
        <small>{date}</small>
        <MdDeleteForever
          className="note__delete"
          size="1.2em"
          onClick={() => handleDeleteNote(id)}
        />
      </div>
    </div>
  );
}
