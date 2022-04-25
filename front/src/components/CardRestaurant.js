import { Link } from 'react-router-dom'

function CardRestaurant(props) {
    return (
        <Link to= {"restaurant/" + props.id} className="card-restaurant">
            <div className="top">
                <img src={"restaurants/" + props.picture } className="img-restaurant" alt="restaurant"></img>
                {
                    props.new &&
                    <span className="new">Nouveau</span>
                }
                
            </div>
            <div className="bottom">
                <div className="informations">
                    <p className="restaurant-name">{props.name}</p>
                    <p className="restaurant-place">{props.place}</p>
                </div>
                <img src={'/heart.png'} className="fav-icon" alt="fav-icon"></img>       
            </div> 
        </Link>   
    );
}

export default CardRestaurant;