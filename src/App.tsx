import React from 'react';
import logo from './sber-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="sber-logo.png" alt="logo" width="200" height="60"/>
        <p>
          Hello React
        </p>
      </header>
    </div>
  );
}

export default App;
