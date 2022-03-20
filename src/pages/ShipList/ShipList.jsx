import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getShipList } from "../../services/sw-api";

const ShipList = () => {
  const [ships, setShips] = useState([])

  useEffect(() => {
    getShipList()
      .then(shipData => setShips(shipData.results))
  }, [])

  return (
    <>
      <div className='main'>
        {ships.length ?
          <div className='ships-container'>
            {ships.map((ship) => (
              <Link to='/starship' key={ship.name} state={{ ship }} >
                <div>
                  {ship.name}
                </div>
              </Link>
            ))}
          </div>
          :
          <p>Loading Ships</p>
        }

      </div>
    </>
  );
}

export default ShipList;