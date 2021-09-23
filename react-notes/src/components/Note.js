import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

export default function Note() {
  return (
    <div className="note">
      <span>First note</span>
      <div className="note__footer">
        <small>15/05/2021</small>
        <MdDeleteForever className="note__delete" size="1.2em" />
      </div>
    </div>
  );
}
