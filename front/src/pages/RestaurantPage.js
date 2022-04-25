function RestaurantPage() {
    return (
        <div id="restaurant-page">
            <div className="img-cover">
                <img src={"/restaurants/la_note_enchantee.jpg" } alt="restaurant"></img>
            </div>
            <section className="menu">
                <div className="menu-content">
                    <h2 className="second-title script">La palette du goût</h2>
                    <div className="menu-container">
                        <div className="menu-column">
                            <h3 className="category-title">Entrées</h3>
                            <div className="card-dish">
                                <div className="informations-dish">
                                    <p className="name-dish">Nom du plat</p>
                                    <p className="description-dish">Description du plat</p>
                                </div>
                                <p className="price-dish">20€</p>
                                <span className="check-dish">
                                    <img src={'/checked.png'} className="dish-icon" alt="fav-icon"></img>
                                </span>
                            </div>
                        </div>
                        <div className="menu-column">
                            <h3 className="category-title">Plats</h3>
                            <div className="card-dish">
                                <div className="informations-dish">
                                    <p className="name-dish">Nom du plat</p>
                                    <p className="description-dish">Description du plat</p>
                                </div>
                                <p className="price-dish">20€</p>
                                <span className="check-dish">
                                    <img src={'/checked.png'} className="dish-icon" alt="fav-icon"></img>
                                </span>
                            </div>
                        </div>
                        <div className="menu-column">
                            <h3 className="category-title">Desserts</h3>
                            <div className="card-dish">
                                <div className="informations-dish">
                                    <p className="name-dish">Nom du plat</p>
                                    <p className="description-dish">Description du plat</p>
                                </div>
                                <p className="price-dish">20€</p>
                                <span className="check-dish">
                                    <img src={'/checked.png'} className="dish-icon" alt="fav-icon"></img>
                                </span>
                            </div>
                        </div>
                    </div>    
                </div>     
            </section>
        </div>
    );
}

export default RestaurantPage;