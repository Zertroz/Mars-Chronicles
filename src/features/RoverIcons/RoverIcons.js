import { useSelector } from 'react-redux';
import Rover from '../Rover/Rover';
import UserMessage from '../UserMessage/UserMessage';
import './RoverIcons.css';

function RoverIcons() {
  const rovers = useSelector(state => state.root.rovers);
  const errorMsg = useSelector(state => state.root.errorMsg);
  const launchSort = [...rovers].sort((a, b) => new Date(a.launch_date) - new Date(b.launch_date));
  const roverIcons = launchSort.map(rover => <Rover rover={rover} key={rover.name}/>);

  return (
    <div className='rover-icon-container'>
      {roverIcons.length ? roverIcons : <UserMessage message={errorMsg ? errorMsg :'Loading...'}/>}
    </div>
  )
}

export default RoverIcons;
