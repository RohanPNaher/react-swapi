import './App.css';
import ShipList from './pages/ShipList/ShipList';
import StarshipPage from './pages/StarshipPage/StarshipPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <nav>Star Wars Ships</nav>
      <Routes>
        <Route
          path='/'
          element={<ShipList />}
        />
        <Route
          path='/starship'
          element={<StarshipPage />}
        />
      </Routes>
    </>
  )
}

export default App;
