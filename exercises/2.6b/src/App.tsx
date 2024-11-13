import React from 'react';
import './App.css';
import ColorBox from './ColorBox';

function App() {
  return (
    <div className="App">
      <h1>Changez la couleur des boîtes</h1>
      <div style={{ display: 'flex' }}>
        <ColorBox />
        <ColorBox />
        <ColorBox />
      </div>
    </div>
  );
}

export default App;
