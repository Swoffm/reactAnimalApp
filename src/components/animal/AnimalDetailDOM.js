import React from "react";


const AnimalDetailsDOM = (animal, isLoading, handleDelete) => {


    return(
        <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture>
          <h3>Name: <span style={{ color: 'darkslategrey' }}>{animal.name}</span></h3>
          <p>Breed: {animal.breed}</p>
    <p>Care Taker: {animal.employeePic}</p>
    
    <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
    <picture>
    <img src={require("../../images/" + animal.employeePic)} alt="picture of employee" />
    </picture>
    
        </div>
      </div>
    )
}

export default AnimalDetailsDOM