import { useEffect, useState } from 'react';
import { fetchImages } from '../Apicalls';
import { useDispatch } from 'react-redux';
import { setImages } from '../../app/rootSlice';
import './Form.css'

function Form({rover}) {
  const dispatch = useDispatch();
  const [date, setDate] = useState('');
  const [sol, setSol] = useState('');
  let maxSols
  let maxDate
  let minDate
  
  if(rover) {
    maxSols = rover.max_sol;
    maxDate = rover.max_date;
    minDate = rover.landing_date;
  }

  const type = date ? 'earth_date' : 'sol'
  const value = sol || date

  const fetchData = async (event) => {
    event.preventDefault()
    const roverPhotos = await fetchImages(type, rover.name, value)
    dispatch(setImages(roverPhotos.photos))
  }
  
  return(
    <form>
      <label >Sol</label>
      <input name='sol' type='number' min='0' max={maxSols} placeholder={0} value={sol} onChange={event => {
        setSol(event.target.value)
        setDate('')
      }} />
      <label>Earth Date</label>
      <input name ='earth-date' type='date' min={minDate} max={maxDate} value={date} onChange={event => {
        setDate(event.target.value)
        setSol('')
      }} />
      <button onClick={fetchData}>Submit</button>
    </form>
  )
}

export default Form;
