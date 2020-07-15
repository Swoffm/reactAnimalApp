import React, { useState, useEffect } from "react"
import LocationManager from "../../directory/LocationsManager"
import "./LocationForm.css"



const LocationFormEdit = props => {
    const [location, setLocation] = useState({ city: "", storeName: "", imageName: "monaco.jpg" });
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...location };
        stateToChange[evt.target.id] = evt.target.value;
        setLocation(stateToChange);
    };
    //this updates the existing animal card
    const updateExistingLocation = evt => {
        evt.preventDefault()
        setIsLoading(true);

        // This is an edit, so we need the id
        const editedLocation = {
            id: props.match.params.locationId,
            city: location.city,
            storeName: location.storeName,
            imageName: location.imageName
        };

        LocationManager.update(editedLocation)
            .then(() => props.history.push("/locations"))
    }

    useEffect(() => {
        LocationManager.get(props.match.params.locationId)
            .then(location => {
                setLocation(location);
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
                            id="city"
                            value={location.city}
                        />
                        <label htmlFor="name">Location City: </label>

                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="storeName"
                            value={location.storeName}
                        />
                        <label htmlFor="storeName">Store Name: </label>

                        <input
                            type="file" useref={location.imageName}
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="imageName"
                         
                        />
                        <label htmlFor="imageName">Select a file: </label>

                    </div>
                    <div className="alignRight">
                        <button
                            type="button" disabled={isLoading}
                            onClick={updateExistingLocation}
                            className="btn btn-primary"
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}

export default LocationFormEdit