import React from "react";

const Owner = () => {
    return (
        <div className="card">
          <div className="card-content">
            <picture>
              <img src={require("./justin.webp")} alt="Justin Bieber" />
            </picture>
            <h3>
              Name: <span className="card-owner">Justin Bieber</span>
            </h3>
            <p>Owner/Big Cheese</p>
          </div>

          </div>

    )
}

export default Owner