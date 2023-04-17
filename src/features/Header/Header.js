import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return(
    <header>
      <Link to="/">
        <h1 className='header-logo'>Mars Chronicles</h1>
      </Link>
    </header>
  )
}

export default Header;