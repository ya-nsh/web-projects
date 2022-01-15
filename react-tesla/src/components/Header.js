import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div className="flex sticky z-10 top-0 left-0 right-0 justify-between items-center p-6 pt-4">
      <div>
        <Link to="/">
          <img
            className="object-contain w-24 mr-24 flex-1"
            src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
            alt=""
          />
        </Link>
      </div>

      {/* Central Links */}
      <div>
        <Link to="/"> Model S </Link>
        <Link to="/"> Model 3 </Link>
        <Link to="/"> Model X </Link>
        <Link to="/"> Model Y </Link>
        <Link to="/"> Solar Roof </Link>
        <Link to="/"> Solar Panels </Link>
      </div>
      {/* Right Links */}
      <div className="">
        <Link to="/"> Shop </Link>
        <Link to="/login"> Account </Link>

        <div
          className="inline-block"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <CloseIcon />
          ) : (
            <button className="card font-semibold">Menu </button>
          )}
        </div>
        {/* <Link to="/"> Menu </Link> */}
      </div>
    </div>
  );
}
