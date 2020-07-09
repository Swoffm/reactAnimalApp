import React from "react";


const EmployeeCard = () => {

    return (
        <div className="card">
            <div className="card-content">
                <picture>
                    <img src={require("./conor.jpg")} alt="Conor Mcgregor" />
                </picture>
                <h3>
                    Name: <span className="card-employee">Conor McGregor</span>
                </h3>
                <p>Job: Pet Protector</p>
            </div>

            <div className="card-content">
                <picture>
                    <img src={require("./Drake.jpg")} alt="Drake" />
                </picture>
                <h3>
                    Name: <span className="card-employee">Drake</span>
                </h3>
                <p>Job: Vibes Man</p>
            </div>

            <div className="card-content">
                <picture>
                    <img src={require("./ronaldo.jpg")} alt="Cristiano Ronaldo" />
                </picture>
                <h3>
                    Name: <span className="card-employee">Cristiano Ronaldo</span>
                </h3>
                <p>Job: Drill Instructor</p>
            </div>
        </div>


    )

}

export default EmployeeCard