import React from "react";


const LocationCard = () => {
    return (
        <div className="card">
          <div className="card-content">
            <picture>
              <img src={require("./Rome.jpg")} alt="Rome location" />
            </picture>
            <h3>
              Name: <span className="card-petname">Big Kennel Italia</span>
            </h3>
            <p>Location: Rome</p>
          </div>
          <div className="card-content">
            <picture>
              <img src={require("./nash.jpg")} alt="Rome location" />
            </picture>
            <h3>
              Name: <span className="card-petname">Big Kennel of Nashville</span>
            </h3>
            <p>Location: Nashville</p>
          </div>
          <div className="card-content">
            <picture>
              <img src={require("./monaco.jpg")} alt="Rome location" />
            </picture>
            <h3>
              Name: <span className="card-petname">Big Kennel Monteco</span>
            </h3>
            <p>Location: Monaco</p>
          </div>
        </div>
      );
}

export default LocationCard