import EmployeeCard from "./EmployeeCard"
import React, { useState, useEffect } from 'react';
import EmployeeManager from "../../directory/EmployeeManager"


const EmployeeList = (props) => {
    const [employees, setEmployees] = useState([])

    const getEmployees = () => {
        //get animals from anaimal manager
        EmployeeManager.getAll().then((employeeDataAPI) => {
            setEmployees(employeeDataAPI)
        });
    }

    const deleteEmployee = (id) => {
        EmployeeManager.delete(id).then(() => {
            EmployeeManager.getAll().then(setEmployees)
        })
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
           <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { props.history.push("/employees/new") }}>
                    Add Employee
  </button>
            </section>
            {employees.map(element =>
                <EmployeeCard key={element.id} employee={element} deleteEmployees={deleteEmployee} />
            )}
        </div>
    )

}

export default EmployeeList