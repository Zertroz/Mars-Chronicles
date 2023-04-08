import React from 'react';
import './App.css';
import RoverIcon from './features/roverIcon/RoverIcon';

function App() {
  return (
    <div className="App">
      <header className="welcomeBanner">
        <h2 className="welcomeText">Yeehaw</h2>
      </header>
      <body className="rover-icon-parent">
        <RoverIcon />
        <RoverIcon />
        <RoverIcon />
        <RoverIcon />
      </body>
    </div>
  );
}

export default App;
