import React from 'react';
import './App.css';
import RoverIcon from './features/roverIcon/RoverIcon';
import Header from './features/header/Header';

function App() {
  return (
    <div className="App">
      <body className="rover-icon-parent">
        <Header />
        <RoverIcon />
        <RoverIcon />
        <RoverIcon />
        <RoverIcon />
      </body>
    </div>
  );
}

export default App;
