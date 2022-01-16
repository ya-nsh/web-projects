import React from 'react';

export default function MenuItem({ title }) {
  return (
    <div className="cursor-pointer text-left border-b-2 border-black">
      <h4 className="cursor-pointer font-medium uppercase pb-4 text-xs pl-3">
        {title}
      </h4>
    </div>
  );
}
