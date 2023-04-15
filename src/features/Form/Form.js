import { useEffect, useState } from 'react';
import { fetchImages } from '../Apicalls';
import { useDispatch } from 'react-redux';
import { setImages } from '../../app/rootSlice';
import './Form.css';

function Form({rover}) {
  const dispatch = useDispatch();
  const [date, setDate] = useState('');
  const [sol, setSol] = useState('');
  let maxSols;
  let maxDate;
  let minDate;
  
  if(rover) {
    maxSols = rover.max_sol;
    maxDate = rover.max_date;
    minDate = rover.landing_date;
  }

  const type = date ? 'earth_date' : 'sol';
  const value = sol || date;

  const fetchData = async (event) => {
    event.preventDefault();
    if(type || value) {
      const roverPhotos = await fetchImages(type, rover.name, value);
      dispatch(setImages(roverPhotos.photos));
    }
  }

  useEffect(() => {
    return function cleanup () {
      dispatch(setImages([]));
    }
  })
  
  return(
    <form>
      <div className='input-parent'>
        <label for="sol">Mars Sol:</label>
        <input className='sol' name='sol' type='number' min='0' max={maxSols} placeholder={'Select Sol'} value={sol} onChange={event => {
          setSol(event.target.value);
          setDate('');
        }} />
      </div>
      <div className='input-parent'>
        <label for="earth-date">Earth Date:</label>
        <input name ='earth-date' type='date' min={minDate} max={maxDate} value={date} onChange={event => {
          setDate(event.target.value);
          setSol('');
        }} />
      </div>
      <button onClick={fetchData}>Get Photos</button>
    </form>
  )
}

export default Form;
