/// this will hold the JSX for Animal Form
import React, {useState, useEffect} from 'react';
import EmployeeManager from "../../directory/EmployeeManager"
import HelperObject from "../HelperFunction/Helper"


const AnimalFormDOM = (handleFieldChange, constructNewAnimal, props, setAnimal, animal) => {
    let employees = []
    let option = ""
    let DOM = <option>Steve</option>
    const [employee, setEmployee] = useState({employee: ""})


    useEffect(() => {
        EmployeeManager.getAll().then((employeeData) => {
            const employeeName = HelperObject.CounterFunction(employeeData)
          
        
            employees.push(employeeName)
            for (let element of employees) {
                for (let obj of element) {
                    option += `<option value=${obj}>${obj}</option>`
                }
            }
            setEmployee({
                employee: option
            })
            setAnimal({
                employee: option
            })
            console.log(employee)
        
        })
    }, [employee.employee])
       


    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="name"
                            placeholder="Animal name"
                        />
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="breed"
                            placeholder="Breed"
                        />
                        <label htmlFor="breed">Breed</label>

                        <select>{employee.employeee}</select>
                        <label htmlFor="selector">Employees</label>
                    </div>
                    <div className="alignRight">
                        <button
                            type="button"
                            disabled={props.isLoading}
                            onClick={constructNewAnimal}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    )


}


export default AnimalFormDOM

