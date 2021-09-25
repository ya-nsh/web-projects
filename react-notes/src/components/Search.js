import React from 'react';
import { MdSearch } from 'react-icons/md';

export default function Search({ handleSearch }) {
  return (
    <div className="search-container">
      <MdSearch className="search-icons" size="1.2em" />
      <input
        type="text"
        placeholder="search notes"
        onChange={e => handleSearch(e.target.value)}
      />
    </div>
  );
}
