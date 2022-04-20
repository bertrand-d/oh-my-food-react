function CardRestaurant(props) {
    return (
        <div className="card-restaurant">
            <div className="top">
                <img src={process.env.PUBLIC_URL + "restaurants/" + props.picture } className="img-restaurant" alt="restaurant"></img>
                <span className="new">Nouveau</span>
            </div>
            <div className="bottom">
                <div className="informations">
                    <p className="restaurant-name">{props.name}</p>
                    <p className="restaurant-place">{props.place}</p>
                </div>
                <img src={process.env.PUBLIC_URL + '/heart.png'} className="fav-icon" alt="fav-icon"></img>       
            </div> 
        </div>   
    );
}

export default CardRestaurant;