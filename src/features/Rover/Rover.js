import { Link } from 'react-router-dom';
import Spirit from '../../assets/Spirit.png';
import Opportunity from '../../assets/Opportunity.png';
import Perseverance from '../../assets/Perseverance.png';
import Curiosity  from '../../assets/Curiosity.png';
import './Rover.css';

function Rover({rover}) {
  const imgObj = {
    Spirit,
    Opportunity,
    Perseverance,
    Curiosity
  };

  return (
    <Link to={`/${rover.name}`} key={rover.id} className='rover-link'>
      <div>
        <img src={imgObj[rover.name]} alt={rover.name} className='rover-icon-img'/>
        <div className='rover-footer'>
          <p className='rover-icon-name'>{rover.name}</p>
          <p className='rover-icon-year'>{(new Date(rover.launch_date)).getFullYear()}</p>
        </div>
      </div>
    </Link>
  )
}

export default Rover;
