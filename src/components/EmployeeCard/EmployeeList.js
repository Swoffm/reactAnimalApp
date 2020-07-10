import EmployeeCard from "./EmployeeCard"
import React, { useState, useEffect } from 'react';
import EmployeeManager from "../../directory/EmployeeManager"


const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    const getEmployees = () => {
        //get animals from anaimal manager
        EmployeeManager.getAll().then((employeeDataAPI) => {
            setEmployees(employeeDataAPI)
        });
    }

    //useEffect to load get employees on the first load

    useEffect(() => {

        getEmployees()
    }, []);

    //next lets give a return for EmployeeList
    //the return will need to map out employees and add 
    //employees to employee Card
    return (
        <div className="container-cards">
            {employees.map(element =>
                <EmployeeCard key={element.id} employee={element} />
            )}
        </div>
    )

}

export default EmployeeList