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
                        </div>
                        <div className="menu-column">
                            <h3 className="category-title">Plats</h3>
                        </div>
                        <div className="menu-column">
                            <h3 className="category-title">Desserts</h3>
                        </div>
                    </div>    
                </div>     
            </section>
        </div>
    );
}

export default RestaurantPage;