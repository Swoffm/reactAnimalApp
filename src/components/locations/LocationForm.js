import React, { useState } from 'react';
import LocationManager from '../../directory/LocationsManager';
import './LocationForm.css';
import LocationFormDOM from "./LocationFormDOM"


const LocationForm = props => {
    const [location, setLocation] = useState({ city: "", storeName: "", imageName: "conor.jpg"});
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...location };
    stateToChange[evt.target.id] = evt.target.value;
    setLocation(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
  */
  const constructNewLocation = evt => {
    evt.preventDefault();
    if (location.city === "" || location.storeName === "") {
      window.alert("Please input an animal name and breed");
    } else {
      setIsLoading(true);
      // Create the animal and redirect user to animal list
      LocationManager.post(location)
        .then(() => props.history.push("/locations"));
    }
  };
  


    return (LocationFormDOM(handleFieldChange, constructNewLocation, {...props}))

}


export default LocationForm