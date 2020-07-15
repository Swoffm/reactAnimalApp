import React from "react";
import { Link } from "react-router-dom";

const LocationCard = (props) => {
console.log(props)
  let locationImage = props.location.imageName
  console.log(props.location.id)
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          {locationImage.startsWith("C") ? <img src={require( locationImage)} alt="Rome location" /> : <img src={require("../../images/" + locationImage)} alt="Rome location" />}
       
        </picture>
        <h3>
          Name: <span className="card-petname">{props.location.storeName}</span>
        </h3>
        <p>Location: {props.location.city}</p>

        <Link to={`/locations/${props.location.id}`}>
          <button>Details</button>
        </Link>
        <Link to={`/locations/${props.location.id}/edit`}>
        <button>Edit</button>
        </Link>

        <button type="button" onClick={() => props.deleteLocation(props.location.id)}>Discharge</button>
       
      </div>
    </div>
  );
}

export default LocationCard