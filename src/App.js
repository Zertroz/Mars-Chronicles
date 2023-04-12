import React, { useEffect } from 'react';
import RoverIcons from './features/roverIcons/RoverIcons';
import Header from './features/header/Header';
// import roverData from './test_data/rovers'
import { Route, Switch } from 'react-router-dom';
import RoverPage from './features/RoverPage/RoverPage';
import { useDispatch } from 'react-redux';
import { setRovers } from './app/rootSlice';
import './App.css';
import {fetchRovers} from './features/Apicalls';

function App() {
  const dispatch = useDispatch()
  const fetchData = async () => {
    const roverData = await fetchRovers()
    dispatch(setRovers(roverData.rovers))
  }


  useEffect(() => {
    console.log('useEffect in App')
    fetchData()
  }, [])

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
