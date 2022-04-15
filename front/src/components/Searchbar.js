function Searchbar() {
    return (
        <div className="searchbar-container">
            <div className="input-container">
                <img src={process.env.PUBLIC_URL + '/maps-and-flags.png'} className="icon" alt="pinMap" /> 
                <input type ="text" className="searchbar" placeholder="Paris, Belleville"/> 
            </div>
        </div>
    );
  }
  
  export default Searchbar;