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
    


    useEffect(() => {
        //got here now make call to get employee with animal
        console.log(props)
        console.log(props.match)
        console.log(props.match.params)
        console.log(employees)
        locationManager.getWithEmployees(props.match.params.locationId)
          .then(APIResult => {
              console.log(APIResult, "asdsadas")
            // setEmployee(APIResult);
            APIResult.employeeId.map(element => {
                EmployeeManager.get(element).then((locations)=> {
                console.log(element)
                console.log(locations)
                    setLocation({
                        city: APIResult.city,
                        storeName: APIResult.storeName,
                        imageName: APIResult.imageName
                    })
                    setEmployee(locations)
                    setIsLoading(false);
                    console.log(location)
                })
            })
          });
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

