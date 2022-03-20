import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getShipDetails } from "../../services/sw-api";

const StarshipPage = (props) => {
  const [shipDetails, setShipDetails] = useState([])
  let location = useLocation()

  useEffect(() => {
    getShipDetails(location.state.ship.url)
      .then(shipDetails => setShipDetails(shipDetails), [])
  }, [])

  return (
    <>
      <div className='detail-container'>
        <div>
          {shipDetails.name ?
            <>
              <h2>Ship Name: {shipDetails.name}</h2>
              <h2>Model: {shipDetails.model}</h2>
              <Link to='/'>Return</Link>
            </>
            :
            <>
              <p>Loading ship details...</p>
            </>
          }
        </div>
      </div>
    </>
  );
}

export default StarshipPage;