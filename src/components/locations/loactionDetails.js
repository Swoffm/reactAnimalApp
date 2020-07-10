import React, { useState, useEffect } from 'react';
import locationManager from '../../directory/LocationsManager';
import LocationDetailsDOM from "./loactionDetailsDOM"
// import './locationDetails.css'


const LocationDetails = props => {
    //Grab use state first
    const [location, setLocation] = useState({ city: "", storeName: "", imageName: ""})

    useEffect(() => {

        locationManager.get(props.locationsId).then((location)=> {
            setLocation({
                city: location.city,
                storeName: location.storeName,
                imageName: location.imageName
            })
        })
    }, [props.locationId])

    return(
        location.imageName ? LocationDetailsDOM(location) : "null"
    )
}


export default LocationDetails

