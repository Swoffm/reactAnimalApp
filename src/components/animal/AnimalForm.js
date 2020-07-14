import React, { useState } from 'react';
import AnimalManager from '../../directory/AnimalManager';
import './AnimalForm.css';
import AnimalFormDOM from "./AnimalFormDOM"


const AnimalForm = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "", employee: ""});
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
  */
  const constructNewAnimal = evt => {
    evt.preventDefault();
    if (animal.name === "" || animal.breed === "") {
      window.alert("Please input an animal name and breed");
    } else {
      setIsLoading(true);
      // Create the animal and redirect user to animal list
      AnimalManager.post(animal)
        .then(() => props.history.push("/animals"));
    }
  };
  

  return (AnimalFormDOM(handleFieldChange, constructNewAnimal, {...props}, setAnimal, animal));
};

export default AnimalForm