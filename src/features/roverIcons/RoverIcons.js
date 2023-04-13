import { useSelector } from 'react-redux';
import Rover from '../Rover/Rover';
import UserMessage from '../UserMessage/UserMessage';
import './RoverIcons.css';

function RoverIcons() {
  const rovers = useSelector(state => state.root.rovers);
  const roverIcons = rovers.map(rover => <Rover rover={rover}/>)

  return (
    <div className='rover-icon-container'>
      {roverIcons.length ? roverIcons : <UserMessage message={'Loading...'}/>}
    </div>
  )
}

export default RoverIcons;
