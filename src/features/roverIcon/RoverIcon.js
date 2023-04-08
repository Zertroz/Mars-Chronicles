import spiritImg from '../../assets/spirit.png'
import './RoverIcon.css'

function RoverIcon() {
  return(
    <section className="rover-icon-container">
      <img src={spiritImg} className='rover-icon-img'/>
      <p>Spirit</p>
    </section>
  )
}

export default RoverIcon
