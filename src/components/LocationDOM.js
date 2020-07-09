import React from "react";
import LocationCard from "./locations/Location";


const LocationDOM = () => {
    return (
        <div>
            <div>
                <h2>
                    Kennel's Location
        <br />
                   
                </h2>
                <address>
                   Visit us in Rome
        <br />
        When In Rome
      </address>
            </div>

            <div>
                <LocationCard />
            </div>

        </div>
    );



}

export default LocationDOM