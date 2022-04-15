function Header() {
  return (
    <header className="main-header">
        <img src ={process.env.PUBLIC_URL + 'logo.png'} alt ="logo oh my food" className="logo"></img>
    </header>
  );
}

export default Header;