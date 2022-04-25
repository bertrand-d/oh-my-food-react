function CardDish(props) {
    return (
        <div className="card-dish">
            <div className="informations-dish">
                <p className="name-dish">{props.name}</p>
                <p className="description-dish">{props.description}</p>
            </div>
            <p className="price-dish">{props.price}</p>
            <span className="check-dish">
                <img src={'/checked.png'} className="dish-icon" alt="fav-icon"></img>
            </span>
        </div>
    );
}

export default CardDish;