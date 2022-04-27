import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="main-header">
        <Link to='/'>
          <img src ={'/logo.png'} alt ="logo oh my food" className="logo"></img>
        </Link>
    </header>
  );
}

export default Header;