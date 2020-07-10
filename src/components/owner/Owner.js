import React from "react";

const Owner = (props) => {
    return (
        <div className="card">
          <div className="card-content">
            <picture>
              <img src={require("../../images/justin.webp")} alt="Justin Bieber" />
            </picture>
            <h3>
              Name: <span className="card-owner">{props.owner.name}</span>
            </h3>
            <p>Job: {props.owner.title}</p>
          </div>

          </div>

    )
}

export default Owner