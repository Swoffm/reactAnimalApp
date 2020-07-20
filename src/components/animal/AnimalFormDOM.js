/// this will hold the JSX for Animal Form
import React, {useState, useEffect} from 'react';


const AnimalFormDOM = (handleFieldChange, constructNewAnimal, props, setAnimal, animal, employees,firstFirstEmployee) => {
  
   


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

                        <select
              className="form-control"
              id="employeeId"
              
              onChange={handleFieldChange}
            ><option >Select an Employee
          </option>
              {employees.map(employee =>
                <option key={employee.id} value={employee.id}>
                  {employee.name}
                </option>
              )}
            </select>
            <label htmlFor="employeeId">Care Taker: </label>
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

