import EmployeeCard from "./EmployeeCard/EmployeeCard";
import React from "react";


const EmployeeDOM = () => {
    return (
        <div>
            <div>
                <h2>
                    Kennel's Amazing Employees
        <br />
                   
                </h2>
                
            </div>

            <div>
                <EmployeeCard />
            </div>

        </div>
    )
}

export default EmployeeDOM