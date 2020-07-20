import React from 'react';



const OwnerFormDOM = (handleFieldChange, constructNewowner, props) => {



    return (<>
        <form>
            <fieldset>
                <div className="formgrid">
                    <input
                        type="text"
                        required
                        onChange={handleFieldChange}
                        id="name"
                        placeholder="Owner Name"
                    />
                    <label htmlFor="name">Name: </label>
                   

              
                </div>
                <div className="alignRight">
                    <button
                        type="button"
                        disabled={props.isLoading}
                        onClick={constructNewowner}
                    >Submit</button>
                </div>
            </fieldset>
        </form>
    </>)
}

export default OwnerFormDOM