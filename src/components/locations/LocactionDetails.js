import { useState, useEffect } from 'react';
import locationManager from '../../directory/LocationsManager';
import EmployeeManager from '../../directory/EmployeeManager';
import LocationDetailsDOM from "./LocationDetailsDOM"
// import './locationDetails.css'


const LocationDetails = props => {
    //Grab use state first
    const [location, setLocation] = useState({ city: "", storeName: "", imageName: ""})
    const [employees, setEmployee] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    

    console.log(employees)

    useEffect(() => {
        //got here now make call to get employee with animal
       locationManager.getWithEmployees(props.match.params.locationId).then(locations => {
         console.log(locations.employees)
         setLocation({
          city: locations.city,
          storeName: locations.storeName,
          imageName: locations.imageName
         })
         console.log(employees)

         setEmployee(locations.employees)
         console.log(employees)

       
       })
      }, [props.locationsId]);



      const deleteEmployee = id => {
        EmployeeManager.delete(id)
          .then(() => locationManager.getWithEmployees(props.match.params.locationId)
          .then(APIResult => {
            setEmployee(APIResult);
            setLocation(APIResult.locations);
          }));
      };

    

    const handleDelete = () => {
 
        //invoke the delete function in AnimalManger and re-direct to the animal list.
        setIsLoading(true);
        locationManager.delete(props.locationsId).then(() =>
          props.history.push("/locations")
        );
      };

    return(
        location.imageName ? LocationDetailsDOM(location,  isLoading, handleDelete, deleteEmployee, employees, {...props}) : "null"
    )
}


export default LocationDetails

