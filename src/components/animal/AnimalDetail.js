import React, { useState, useEffect } from 'react';
import AnimalManager from '../../directory/AnimalManager';
import './AnimalDetail.css'
import EmployeeManager from "../../directory/EmployeeManager"
import AnimalDetailsDOM from "../animal/AnimalDetailDOM"

const AnimalDetail = props => {
    const [animal, setAnimal] = useState({ name: "", breed: "", employeeName: "", employeePic: "" });
    

    useEffect(() => {
        let animalCareTakerName;
    let animalCareTakerImage;
      //get(id) from AnimalManager and hang on to the data; put it into state
      AnimalManager.get(props.animalId)
        .then(animal => {
            EmployeeManager.get(animal.careTaker).then((employee) => {
                animalCareTakerName = employee.name
                animalCareTakerImage = employee.imageName
               
            }).then((animalAndEmploy) => {
                console.log(animalAndEmploy)
                setAnimal({
              
                    name: animal.name,
                    breed: animal.breed,
                    careTaker: animal.careTaker,
                    employeeName: animalCareTakerName,
                    employeePic: animalCareTakerImage

                  })
            })
            // <img src={require("../../images/" + animal.employeePic)} alt={animal.employeeName} />

            
            
          
        });

       

    }, [props.animalId]);
    
    return (
    animal.employeePic ? AnimalDetailsDOM(animal) : "null"
    )
    
  }
  
  export default AnimalDetail;