import './Header.css';
import nasa from '../../assets/nasa-logo.svg';
import { Link } from 'react-router-dom';

function Header() {
  return(
    <header>
      <Link to="/">
        <h1 className='header-logo'>Mars Chronicles</h1>
      </Link>
      <img src={nasa}/>
    </header>
  )
}

export default Header;
