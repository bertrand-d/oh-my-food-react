import {useSelector} from 'react-redux'

import Searchbar from "../components/Searchbar";
import CardRestaurant from "../components/CardRestaurant";

function Homepage() {
    const restaurant = useSelector(state => state.restaurant)

    return (
      <div id="homepage">
        <Searchbar/>
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
                    {
                        restaurant.map((restaurant, index) => {
                            return <CardRestaurant key={index} id={restaurant.id} picture={restaurant.picture} name={restaurant.name} place={restaurant.place} />
                        })
                    }
                </div>
            </div>
        </section>
      </div>
    );
  }
  
  export default Homepage;