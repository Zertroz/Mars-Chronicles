import React from 'react';
import './App.css';
import RoverIcon from './features/roverIcon/RoverIcon';
import Header from './features/header/Header';
import roverData from './test_data/rovers'

function App() {
  return (
      <body className="App">
        <Header />
        <RoverIcon rovers={roverData.rovers} />
      </body>
  );
}

export default App;
