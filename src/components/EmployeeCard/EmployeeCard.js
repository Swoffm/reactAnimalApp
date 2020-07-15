import React from "react";
import { Link } from "react-router-dom";
import "./EmployeeCard.css"


const EmployeeCard = (props) => {
    console.log(props)
    console.log(props.history)
   
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

                <Link to={`/employees/${props.employee.id}/edit`}>
        <button>Edit</button>
        </Link>
        <button type="button"
        onClick={() => { props.history.push(`/employees/${props.employee.id}/details`) }}>Details</button>

        <button type="button" onClick={() => props.deleteEmployees(props.employee.id)}>FIRE</button>
                
            </div>

        </div>


    )

}

export default EmployeeCard