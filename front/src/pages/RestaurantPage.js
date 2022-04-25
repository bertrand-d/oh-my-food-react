import {useSelector} from 'react-redux'
import { useParams } from "react-router-dom";
import CardDish from "../components/CardDish";

function RestaurantPage() {
    const restaurants = useSelector(state => state.restaurant)
    const idParam = useParams("&id=").id.replace('&id=',"")
    let oneRestaurant;

    for(let i = 0; i < restaurants.length; i++) {
        if(restaurants[i].id === idParam) {
            oneRestaurant = restaurants[i]
        }
    }

    return (
        <div id="restaurant-page">
            <div className="img-cover">
                <img src={"/restaurants/" + oneRestaurant.picture } alt="restaurant"></img>
            </div>
            <section className="menu">
                <div className="menu-content">
                    <h2 className="second-title script">{oneRestaurant.name}</h2>
                    <div className="menu-container">
                        <div className="menu-column">
                            <h3 className="category-title">Entrées</h3>
                            {
                                oneRestaurant.recipes[0].starters.map((starter, index) => {
                                    return(
                                        <CardDish key={index} name={starter.name} description={starter.description} price={starter.price}/>
                                    )       
                                })
                            }        
                        </div>
                        <div className="menu-column">
                            <h3 className="category-title">Plats</h3>
                            {
                                oneRestaurant.recipes[0].dishes.map((dish, index) => {
                                    return(
                                        <CardDish key={index} name={dish.name} description={dish.description} price={dish.price}/>
                                    )       
                                })
                            }  
                        </div>
                        <div className="menu-column">
                            <h3 className="category-title">Desserts</h3>
                            {
                                oneRestaurant.recipes[0].desserts.map((dessert, index) => {
                                    return(
                                        <CardDish key={index} name={dessert.name} description={dessert.description} price={dessert.price}/>
                                    )       
                                })
                            }
                        </div>
                    </div>    
                </div>     
            </section>
        </div>
    );
}

export default RestaurantPage;