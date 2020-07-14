import React from 'react';



const LocationFormDOM = (handleFieldChange, constructNewLocation, props) => {



    return (<>
        <form>
            <fieldset>
                <div className="formgrid">
                    <input
                        type="text"
                        required
                        onChange={handleFieldChange}
                        id="city"
                        placeholder="City Name"
                    />
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        required
                        onChange={handleFieldChange}
                        id="storeName"
                        placeholder="Store Name"
                    />
                    <label htmlFor="storeName">Store Name</label>

                 
              
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

export default LocationFormDOM