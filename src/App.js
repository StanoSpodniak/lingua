import './App.css';
import React from 'react';
import Game from './Game/Game';

function App() {
  return (
    <div className="App">
      <header className="App">
        <h1>Lingua</h1>
      </header>
      <div>
        <Game />
      </div>
    </div>
  );
}

export default App;
