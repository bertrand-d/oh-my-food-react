import './css/main.scss';
import {Routes, Route} from 'react-router-dom'
import Header from './layouts/Header';
import Homepage from './pages/Homepage';
import RestaurantPage from './pages/RestaurantPage';

function App() {
  return (
      <div className="App">
        <Header/>
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/restaurant/:id" element={<RestaurantPage/>} />
        </Routes>
      </div>
  );
}

export default App;
