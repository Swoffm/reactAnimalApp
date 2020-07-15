import React, { useState, useEffect } from 'react';
import AnimalManager from '../../directory/AnimalManager';
import EmployeeManager from '../../directory/EmployeeManager';
import './AnimalForm.css';
import AnimalFormDOM from "./AnimalFormDOM"


const AnimalForm = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "", employeeId: ""});
  
  const [isLoading, setIsLoading] = useState(false);

  const [employees, setEmployee] = useState([])
let firstFirstEmployee = employees[0] 

       useEffect(() => {
        EmployeeManager.getAll().then((employee) => {
          setEmployee(employee)
          
        
      });
  }, []);

  const handleFieldChange = evt => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
  */
  const constructNewAnimal = evt => {
    evt.preventDefault();
    if (animal.name === "" || animal.breed === "" || animal.employeeId === "") {
      window.alert("Please input an animal name and breed");
      console.log(firstFirstEmployee.id)
    } else {
      setIsLoading(true);
      // Create the animal and redirect user to animal list
      AnimalManager.post(animal)
        .then(() => props.history.push("/animals"));
    }
  };
  
  

   return (firstFirstEmployee?AnimalFormDOM(handleFieldChange, constructNewAnimal, props, setAnimal, animal, employees, firstFirstEmployee):"null")
};

export default AnimalForm