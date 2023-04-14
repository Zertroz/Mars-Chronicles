import { useEffect, useState } from 'react';
import './Form.css'

function Form({rover}) {
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
  
  return(
    <form>
      <input name='sol' type='number' min='0' max={maxSols} value={sol} onChange={event => setSol(event.target.value)} />
      <input name ='earth-date' type='date' min={minDate} max={maxDate} value={date} onChange={event => setDate(event.target.value)} />
      <button>Submit</button>
    </form>
  )
}

export default Form;
