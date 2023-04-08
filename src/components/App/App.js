import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import handsomeJohnnyFive from '../../assets/J5IsAlive-Handsome.png'

function App() {
  return (
    <div className="App">
      <header className="welcomeBanner">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <Counter /> */}
        <h2 className="welcomeText">Yeehaw</h2>
      </header>
      <body className="friendsOfJohnnyFive">
        <img className ="basicRobot" src={handsomeJohnnyFive}/>
        <img className ="basicRobot" src={handsomeJohnnyFive}/>
        <img className ="basicRobot" src={handsomeJohnnyFive}/>
        <img className ="basicRobot" src={handsomeJohnnyFive}/>
      </body>
    </div>
  );
}

export default App;
