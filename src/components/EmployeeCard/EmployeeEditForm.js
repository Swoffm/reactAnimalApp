import React, { useState, useEffect } from "react"
import EmployeeManager from "../../directory/EmployeeManager"
import "./EmployeeForm.css"



const EmployeeEditForm = props => {
    const [employee, setEmployee] = useState({ name: "", job: "", imageName: "Drake.jpg" });
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...employee };
        stateToChange[evt.target.id] = evt.target.value;
        setEmployee(stateToChange);
    };
    //this updates the existing animal card
    const updateExistingEmployee = evt => {
        evt.preventDefault()
        setIsLoading(true);

        // This is an edit, so we need the id
        const editedEmployee = {
            id: props.match.params.employeesId,
            name: employee.name,
            job: employee.job,
            imageName: employee.imageName
        };

        EmployeeManager.update(editedEmployee)
            .then(() => props.history.push("/employees"))
    }

    useEffect(() => {
        EmployeeManager.get(props.match.params.employeesId)
            .then(employee => {
                console.log(employee)
                setEmployee(employee);
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="name"
                            value={employee.name}
                        />
                        <label htmlFor="name">Employee Name: </label>

                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="job"
                            value={employee.job}
                        />
                        <label htmlFor="job">Job Name: </label>
{/* 
                        <input
                            type="file" useref={employee.imageName}
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="imageName"
                         
                        />
                        <label htmlFor="imageName">Select a file: </label> */}

                    </div>
                    <div className="alignRight">
                        <button
                            type="button" disabled={isLoading}
                            onClick={updateExistingEmployee}
                            className="btn btn-primary"
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}

export default EmployeeEditForm