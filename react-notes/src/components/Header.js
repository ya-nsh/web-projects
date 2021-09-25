import React from 'react';

export default function Header({ handleColorChange }) {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        className="note--save"
        onClick={() => handleColorChange(prevBool => !prevBool)}
      >
        Dark Mode
      </button>
    </div>
  );
}
