import Searchbar from "../components/Searchbar";

function Homepage() {
    return (
      <div id="homepage">
        <Searchbar></Searchbar>
        <section className="section-discover">
            <h1 className="main-title">Réservez le menu qui vous convient</h1>
            <p>Découvrez de nouveaux restaurants d'exception, sélectionnés par nos soins</p>
            <a href="toto" className="button">Explorez nos restaurants</a>
        </section>
        <section className="section-fonctionment">
            <h2 className="second-title">Fonctionnement</h2>
            <div className="buttons-container">
                <button className= "button-function">
                    <span className="number">1</span>
                    <span className="icon phone"></span>
                    Choisissez un restaurant
                </button>
                <button className= "button-function">
                    <span className="number">2</span>
                    <span className="icon list"></span>
                    Composez votre menu
                </button>
                <button className= "button-function">
                    <span className="number">3</span>
                    <span className="icon store"></span>
                    Dégustez au restaurant
                </button>
            </div>
        </section>
        <section className="section-restaurants">
            <div className="section-content">
                <h2 className="second-title">Restaurants</h2>
                <div className="cards-container">
                    <div className="card-restaurant">
                        <div className="top">
                            <img src={process.env.PUBLIC_URL + '/restaurants/la_palette_du_gout.jpg'} className="img-restaurant" alt="restaurant"></img>
                            <span className="new">Nouveau</span>
                        </div>
                        <div className="bottom">
                            <div className="informations">
                                <p className="restaurant-name">La palette du goût</p>
                                <p className="restaurant-place">Ménilmontant</p>
                            </div>
                            <img src={process.env.PUBLIC_URL + '/heart.png'} className="fav-icon" alt="fav-icon"></img>       
                        </div>    
                    </div>
                    <div className="card-restaurant">
                        <div className="top">
                            <img src={process.env.PUBLIC_URL + '/restaurants/la_note_enchantee.jpg'} className="img-restaurant" alt="restaurant"></img>
                            <span className="new">Nouveau</span>
                        </div>
                        <div className="bottom">
                            <div className="informations">
                                <p className="restaurant-name">La note enchantée</p>
                                <p className="restaurant-place">Charonne</p>
                            </div>
                            <img src={process.env.PUBLIC_URL + '/heart.png'} className="fav-icon" alt="fav-icon"></img>       
                        </div>    
                    </div>
                    <div className="card-restaurant">
                        <div className="top">
                            <img src={process.env.PUBLIC_URL + '/restaurants/a_la_francaise.jpg'} className="img-restaurant" alt="restaurant"></img>
                        </div>
                        <div className="bottom">
                            <div className="informations">
                                <p className="restaurant-name">A la française</p>
                                <p className="restaurant-place">Cité rouge</p>
                            </div>
                            <img src={process.env.PUBLIC_URL + '/heart.png'} className="fav-icon" alt="fav-icon"></img>       
                        </div>    
                    </div>
                    <div className="card-restaurant">
                        <div className="top">
                            <img src={process.env.PUBLIC_URL + '/restaurants/le_delice_des_sens.jpg'} className="img-restaurant" alt="restaurant"></img>
                        </div>
                        <div className="bottom">
                            <div className="informations">
                                <p className="restaurant-name">Le délice des sens</p>
                                <p className="restaurant-place">Folie-Mélicourt</p>
                            </div>
                            <img src={process.env.PUBLIC_URL + '/heart.png'} className="fav-icon" alt="fav-icon"></img>       
                        </div>    
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  }
  
  export default Homepage;