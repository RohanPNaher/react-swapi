import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getShipList } from "../../services/sw-api";

const ShipList = () => {
  const [ships, setShips] = useState([])

  useEffect(() => {
    getShipList()
      .then(shipData => setShips(shipData.results))
  })

  return (
    <>
      <h1>The Ships are Here</h1>
      <div className="ships-container">
        {ships.map((ship) => (
          <div key={ship.name}>
            {ship.name}
          </div>
        ))}
      </div>
    </>
  );
}
 
export default ShipList;