import React from "react";

const LocationDetailsDOM = (location) => {
   return ( <div className="card">
        <div className="card-content">
          
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{location.city}</span></h3>
            <picture>
            <img src={require("../../images/" + location.imageName)} alt="Beautful picture of a city" />
            
            </picture>
            <p>Store Name: {location.storeName}</p>
   
        </div>
      </div> )
}


export default LocationDetailsDOM
