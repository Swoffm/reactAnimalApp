import React from "react";
//animal Card is getting passed a props 
//this props is coming from Animal List
//WHY?
//Animal List is the parrent function of AnimalCard
//meaning Animal Card is being called inside of AnimalList

const AnimalCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require('./dog.svg')} alt="My Dog" />
        </picture>
        <h3>Name: <span className="card-petname">
          {props.animal.name}
        </span></h3>
        <p>Breed: {props.animal.breed}</p>
      </div>
    </div>
  );
}

export default AnimalCard;