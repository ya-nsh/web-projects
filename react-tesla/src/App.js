import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Header from './components/Header';

import Menu from './components/Menu';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        {isMenuOpen && <Menu />}
        {/* Header */}
        {/* HeaderBlock */}
      </div>
    </Router>
  );
}

export default App;
