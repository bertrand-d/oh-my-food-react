function RestaurantPage() {
    return (
        <div id="restaurant-page">
            <img src={"/restaurants/la_note_enchantee.jpg" } className="img-cover" alt="restaurant"></img>
            <section className="menu">
                <h2 className="main-subtitle-script">La palette du goût</h2>
                <div className="menu-container">
                    <div className="menu-column">
                        <h3 className="starters">Entrées</h3>
                    </div>
                    <div className="menu-column">
                        <h3 className="dishes">Plats</h3>
                    </div>
                    <div className="menu-column">
                        <h3 className="desserts">Desserts</h3>
                    </div>
                </div>
                
            </section>
        </div>
    );
}

export default RestaurantPage;