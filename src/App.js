import React from 'react';
import './App.css';
import RoverIcon from './features/roverIcon/RoverIcon';
import Header from './features/header/Header';
import roverData from './test_data/rovers'
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
      <body className="App">
        <Header />
        <Switch>
          <Route path="/:rover" render={({match}) => {
            return <p>{match.params.rover}</p>
          }}/>
          <Route path="/">
            <RoverIcon rovers={roverData.rovers} />
          </Route>
        </Switch>
      </body>
  );
}

export default App;
