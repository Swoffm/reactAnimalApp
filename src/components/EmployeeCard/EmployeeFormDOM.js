import React from 'react';



const EmployeeFormDOM = (handleFieldChange, constructNewLocation, props) => {

//THE ID AND HTMLFOR MUS MATCH THE DATA IN JSON SERVER
// EXAMPLE IF AN OBJECT HAS A VALUE OF OBJECT.IMAGENAME
//AND IMAGE NAME WILL BE GIVEN BY THE USER
//THEN TO PROPERLY COLLECT THE IMAGE NAME YOU MUST HAVE ID AND HTML FOR MATHC IMAGENAME
//THEREFORE OBJECT.SOMEPROP MUST MATCH IDS AND HTMLFOR

    return (<>
        <form>
            <fieldset>
                <div className="formgrid">
                    <input
                        type="text"
                        required
                        onChange={handleFieldChange}
                        id="name"
                        placeholder="Employee Name"
                    />
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        required
                        onChange={handleFieldChange}
                        id="job"
                        placeholder="Job specilties"
                    />
                    <label htmlFor="job">Job: </label>
                </div>
                <div className="alignRight">
                    <button
                        type="button"
                        disabled={props.isLoading}
                        onClick={constructNewLocation}
                    >Submit</button>
                </div>
            </fieldset>
        </form>
    </>)
}

export default EmployeeFormDOM