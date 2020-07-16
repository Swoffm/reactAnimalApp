import React from "react";
import EmployeeCard from "../EmployeeCard/EmployeeCard"


const LocationDetailsDOM = (location,  isLoading, handleDelete, deleteEmployee, employees, props) => {

console.log(employees)

   return ( <div className="locationDetails"><div className="card">
        <div className="card-content">
          
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{location.city}</span></h3>
            <picture>
            <img src={require("../../images/" + location.imageName)} alt="Beautful picture of a city" />
            
            </picture>
            <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
            <p>Store Name: {location.storeName}</p>
   
        </div>
      </div>
      {/* {employees.map(element =>
                <EmployeeCard key={element.id} employee={element} deleteEmployees={deleteEmployee} {...props} />
            )} */}
      
      </div> )
}


export default LocationDetailsDOM
