import React from "react";


const EmployeeCard = (props) => {
   
    let employeeImage = props.employee.imageName


    return (
        <div className="card">
            <div className="card-content">
                <picture>
                    <img src={require("../../images/" + employeeImage)} alt={props.employee.name} />
                </picture>
                <h3>
                    Name: <span className="card-employee">{props.employee.name}</span>
                </h3>
                <p>Job: {props.employee.job}</p>
            </div>

        </div>


    )

}

export default EmployeeCard