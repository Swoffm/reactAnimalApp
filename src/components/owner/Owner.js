import React from "react";
import { Link } from "react-router-dom";

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
            <p>Pet: {props.owner.pet}</p>

            <Link to={`/owner/${props.owner.id}/edit`}>
        <button>Edit</button>
        </Link>

        <button type="button" onClick={() => props.deleteOwner(props.owner.id)}>Discharge</button>
       
          </div>

          </div>

    )
}

export default Owner