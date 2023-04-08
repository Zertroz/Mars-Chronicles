import spiritImg from '../../assets/spirit.png'
import './RoverIcon.css'

function RoverIcon({rovers}) {
  const roversIcons = rovers.map(rover => {
    return (
      <div className='rover-icon' key={rover.id}>
        <img src={spiritImg} className='rover-icon-img'/>
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
