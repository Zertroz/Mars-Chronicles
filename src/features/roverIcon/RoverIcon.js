import Spirit from '../../assets/Spirit.png';
import Opportunity from '../../assets/Opportunity.png';
import Perseverance from '../../assets/Perseverance.png';
import Curiosity  from '../../assets/Curiosity.png';
import './RoverIcon.css';
import { Link } from 'react-router-dom';

function RoverIcon({rovers}) {

  const imgObj = {
    Spirit,
    Opportunity,
    Perseverance,
    Curiosity
  }

  const roversIcons = rovers.map(rover => {
    return (
      <Link to={`/${rover.name}`}>
        <div className='rover-icon' key={rover.id}>
          <img src={imgObj[rover.name]} className='rover-icon-img'/>
          <p>{rover.name}</p>
        </div>
      </Link>
    )
  })

  return (
    <div className='rover-icon-container'>
      {roversIcons}
    </div>
  )
}

export default RoverIcon;
