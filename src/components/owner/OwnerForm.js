
import { useState} from 'react';
import OwnerManager from "../../directory/ownerManager"
import './OwnerForm.css';
import OwnerFormDOM from "./OwnerFormDOM"


const OwnerForm = (props) => {

    const [owner, setOwner] = useState({ name: "",  pet: "Pit Bull"});
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...owner };
    stateToChange[evt.target.id] = evt.target.value;
    setOwner(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create owner      object, invoke the ownerManager post method, and redirect to the full owner list
  */
  const constructNewowner = evt => {
    evt.preventDefault();
    if (owner.name === "") {
      window.alert("Please input an owner name and breed");
    } else {
      setIsLoading(true);
      // Create the owner and redirect user to owner list
      OwnerManager.post(owner)
        .then(() => props.history.push("/owner"));
    }
  };


    return(OwnerFormDOM(handleFieldChange, constructNewowner, {...props}))


}

export default OwnerForm
