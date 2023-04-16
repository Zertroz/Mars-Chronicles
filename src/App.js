import React, { useEffect } from 'react';
import RoverIcons from './features/RoverIcons/RoverIcons';
import Header from './features/Header/Header';
import { Route, Switch } from 'react-router-dom';
import RoverPage from './features/RoverPage/RoverPage';
import { useDispatch } from 'react-redux';
import { setRovers, setErrorMessage} from './app/rootSlice';
import {fetchRovers} from './features/Apicalls';
import './App.css';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      const roverData = await fetchRovers();
      if(roverData instanceof Error) {
        dispatch(setErrorMessage(roverData.toString()));
      } else {
        dispatch(setErrorMessage(''));
        dispatch(setRovers(roverData.rovers));
      }
    }
    fetchData();
  }, [dispatch])

  return (
      <main className="App">
        <Header />
        <Switch>
          <Route path="/:rover" render={({match}) => {
            return <RoverPage roverName={match.params.rover} />
          }}/>
          <Route path="/">
            <RoverIcons />
          </Route>
        </Switch>
      </main>
  );
}

export default App;
