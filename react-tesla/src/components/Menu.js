import React from 'react';
import MenuItem from './MenuItem';
import './Menu.css';

function Menu() {
  return (
    <div className="fixed top-0 bottom-0 right-0 pl-5 pt-20 pb-5 pr-5 bg-red-300 flex flex-col gap-4 min-w-[19%] overflow-y-auto">
      <MenuItem title="existing inventory" />
      <MenuItem title="used inventory" />
      <MenuItem title="trade-in" />
      <MenuItem title="cybertruck" />
      <MenuItem title="roadster" />
      <MenuItem title="semi" />
      <MenuItem title="charging" />
      <MenuItem title="powerwall" />
      <MenuItem title="commercial solar" />
      <MenuItem title="test drive" />
      <MenuItem title="find us" />
      <MenuItem title="support" />
      <MenuItem title="united states" />
    </div>
  );
}

export default Menu;

// flex flex-col items-end gap-4 mr-4
