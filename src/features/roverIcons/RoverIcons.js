import Spirit from '../../assets/Spirit.png';
import Opportunity from '../../assets/Opportunity.png';
import Perseverance from '../../assets/Perseverance.png';
import Curiosity  from '../../assets/Curiosity.png';
import { Link } from 'react-router-dom';
import './RoverIcons.css';
import { useSelector } from 'react-redux';

function RoverIcons() {
  const rovers = useSelector(state => state.root.rovers);
  const imgObj = {
    Spirit,
    Opportunity,
    Perseverance,
    Curiosity
  };

  const roverIcons = rovers.map(rover => {
    return (
      <Link to={`/${rover.name}`} key={rover.id} className='rover-link'>
        <div>
          <img src={imgObj[rover.name]} alt={rover.name} className='rover-icon-img'/>
          <p className='rover-icon-name'>{rover.name}</p>
        </div>
      </Link>
    )
  })

  return (
    <div className='rover-icon-container'>
      {roverIcons}
    </div>
  )
}

export default RoverIcons;
