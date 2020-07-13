import React, { useState, useEffect } from 'react';
import LocationCard from "./Location"
import LocationManager from "../../directory/LocationsManager"

const LocationList = () => {
    //useState first to have it displayed to the DOM
    //The first value in useState is the inital value that will loaded to the DOM
    //the second is a function that allows for the manipulation of Data

    const [locations, setLocations] = useState([])

    const getLocations = () => {
        
        //get locations using location manager
        LocationManager.getAll().then(locationData => {
            setLocations(locationData)
            //remeber set Locations does not replace or change
            //IT OVERRIDES

        })
}
    const deleteLocations = (id) => {
        LocationManager.delete(id).then(() => {
            LocationManager.getAll().then(setLocations)
        })
    }

    useEffect(() => {
        getLocations();
    }, [])

    return (
        <div className="container-cards">
            {locations.map(location => 
                <LocationCard key={location.id} location={location} deleteLocation={deleteLocations}/>
            )}
        </div>
        )

}

export default LocationList