import React from "react";
import { Link } from "react-router-dom";

const LocationCard = (props) => {

  let locationImage = props.location.imageName
  console.log(locationImage)
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("../../images/" + locationImage)} alt="Rome location" />
        </picture>
        <h3>
          Name: <span className="card-petname">{props.location.storeName}</span>
        </h3>
        <p>Location: {props.location.city}</p>

        <Link to={`/locations/${props.location.id}`}>
          <button>Details</button>
        </Link>

        <button type="button" onClick={() => props.deleteLocation(props.location.id)}>Discharge</button>
       
      </div>
    </div>
  );
}

export default LocationCard