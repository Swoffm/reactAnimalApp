import { useState, useEffect } from 'react';
import locationManager from '../../directory/LocationsManager';
import LocationDetailsDOM from "./LocationDetailsDOM"
// import './locationDetails.css'


const LocationDetails = props => {
    //Grab use state first
    const [location, setLocation] = useState({ city: "", storeName: "", imageName: ""})
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        locationManager.get(props.locationsId).then((location)=> {
            setLocation({
                city: location.city,
                storeName: location.storeName,
                imageName: location.imageName
            })
            setIsLoading(false);
        })
    }, [props.locationsId])

    const handleDelete = () => {
  
        //invoke the delete function in AnimalManger and re-direct to the animal list.
        setIsLoading(true);
        locationManager.delete(props.locationsId).then(() =>
          props.history.push("/locations")
        );
      };

    return(
        location.imageName ? LocationDetailsDOM(location,  isLoading, handleDelete) : "null"
    )
}


export default LocationDetails

