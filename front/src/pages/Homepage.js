import Searchbar from "../components/Searchbar";

function Homepage() {
    return (
      <div id="homepage">
        <Searchbar></Searchbar>
        <section className="section-discover">
            <h1 className="main-title">Réservez le menu qui vous convient</h1>
            <p>Découvrez de nouveaux restaurants d'exception, sélectionnés par nos soins</p>
            <a href="toto" className="button primary">Explorez nos restaurants</a>
        </section>
      </div>
    );
  }
  
  export default Homepage;