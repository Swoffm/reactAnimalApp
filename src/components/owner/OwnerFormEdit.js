import React, { useState, useEffect } from "react"
import OwnerManager from "../../directory/ownerManager"
import "./OwnerForm.css"



const OwnerFormEdit = props => {
    const [owner, setowner] = useState({ name: "", pet: "Pit Bull"});
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...owner };
        stateToChange[evt.target.id] = evt.target.value;
        setowner(stateToChange);
    };
    //this updates the existing animal card
    const updateExistingowner = evt => {
        evt.preventDefault()
        setIsLoading(true);

        // This is an edit, so we need the id
        const editedowner = {
            id: props.match.params.ownerId,
            name: owner.name,
            pet: owner.pet,
        };

        OwnerManager.update(editedowner)
            .then(() => props.history.push("/owner"))
    }

    useEffect(() => {
        OwnerManager.get(props.match.params.ownerId)
            .then(owner => {
                setowner(owner);
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
                            value={owner.name}
                        />
                        <label htmlFor="name">Name:  </label>

                      
                    </div>
                    <div className="alignRight">
                        <button
                            type="button" disabled={isLoading}
                            onClick={updateExistingowner}
                            className="btn btn-primary"
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}

export default OwnerFormEdit