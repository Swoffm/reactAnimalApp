import React, { useState, useEffect } from 'react';
import Owner from "./Owner"
import OwnerManager from "../../directory/ownerManager"

const OwnerList = (props) => {
    const [owners, setOwner] = useState([])

    const getOwner = () => {
        //get data from apai
        OwnerManager.getAll().then((ownerDataAPI)=>{
            setOwner(ownerDataAPI)
        })
    }
    const deleteOwner = (id) => {
        OwnerManager.delete(id).then(() => {
            OwnerManager.getAll().then(setOwner)
        })
    }

    //use useEffect to gather data when the page loads
    //useEffect gathers once on load
    useEffect(()=> {
        getOwner()
        //the empty array means it'll only run once
    }, []);

    return (
        //Remeber Map returns an array with the adjusted values
        <div className="container-cards"><section className="section-content">
        <button type="button"
            className="btn"
            onClick={() => { props.history.push("/owner/new") }}>
            Add Owner
</button>
    </section>
            {owners.map(element =>
                <Owner key={element.id} owner={element} deleteOwner={deleteOwner} {...props}/>
            )}
        </div>
    )
}

export default OwnerList