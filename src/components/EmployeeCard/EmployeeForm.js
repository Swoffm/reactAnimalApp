import { useState } from 'react';
import EmployeeManager from '../../directory/EmployeeManager';
import './EmployeeForm.css';
import EmployeeFormDOM from "./EmployeeFormDOM"
 


const EmployeeForm = (props) => {

    const [employee, setEmployee] = useState({ name: "", job: "", imageName: "Drake.jpg"});
    const [isLoading, setIsLoading] = useState(false);
  
    const handleFieldChange = evt => {
      const stateToChange = { ...employee };
      stateToChange[evt.target.id] = evt.target.value;
      setEmployee(stateToChange);
    };
  
    /*  Local method for validation, set loadingStatus, create Employee      object, invoke the EmployeeManager post method, and redirect to the full Employee list
    */
    const constructNewEmployee = evt => {
      evt.preventDefault();
      if (employee.name === "" || employee.job === "") {
        window.alert("Please input an Employee name and breed");
      } else {
        setIsLoading(true);
        // Create the Employee and redirect user to Employee list
        EmployeeManager.post(employee)
          .then(() => props.history.push("/Employees"));
      }
    };
    
  
    return (EmployeeFormDOM(handleFieldChange, constructNewEmployee, {...props}));
  


}

export default EmployeeForm