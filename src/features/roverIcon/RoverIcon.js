import Spirit from '../../assets/Spirit.png';
import Opportunity from '../../assets/Opportunity.png';
import Perseverance from '../../assets/Perseverance.png';
import Curiosity  from '../../assets/Curiosity.png';
import './RoverIcon.css';

function RoverIcon({rovers}) {

  const imgObj = {
    Spirit : Spirit,
    Opportunity : Opportunity,
    Perseverance : Perseverance,
    Curiosity : Curiosity
  }

  const roversIcons = rovers.map(rover => {
    return (
      <div className='rover-icon' key={rover.id}>
        <img src={imgObj[rover.name]} className='rover-icon-img'/>
        <p>{rover.name}</p>
      </div>
    )
  })

  return (
    <div className='rover-icon-container'>
      {roversIcons}
    </div>
  )
}

export default RoverIcon;
