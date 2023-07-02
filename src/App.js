import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import Home from './components/Home/Home';
import Country from './components/Country/Country';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Add the .dark-mode class to the #root element if darkMode is true
  if (!darkMode) {
    document
      .getElementById('root')
      .style.setProperty('background-color', 'hsl(207, 26%, 17%)');
  } else {
    document
      .getElementById('root')
      .style.setProperty('background-color', '#faedcd');
  }

  return (
    <div className={`bod ${darkMode ? 'light' : ''}`}>
      <nav>
        <h1>Where in the world?</h1>
        <button type="button" className="dark-btn" onClick={toggleDarkMode}>
          {darkMode ? <FaMoon /> : <FaSun />}
        </button>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:countryName" element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
