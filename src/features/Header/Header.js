import './Header.css';
import nasa from '../../assets/nasa-logo.svg';
import { Link } from 'react-router-dom';

function Header() {
  return(
    <header>
      <Link to="/">
        <h1 className='header-logo'>Mars Chronicles</h1>
      </Link>
      <a href='https://api.nasa.gov/' target="_blank">
        <img className='nasa-logo' src={nasa}/>
        <p className='header-logo-sm'>{'{ APIs }'}</p>
      </a>
    </header>
  )
}

export default Header;
