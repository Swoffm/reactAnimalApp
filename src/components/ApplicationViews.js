import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import Owner from "./owner/Owner"
import EmployeeCard from "./EmployeeCard/EmployeeCard"
// import AnimalCard from "./animal/AnimalCard";
import AnimalList from "./animal/AnimalList"
import LocationCard from "./locations/Location"
//only include these once they are built - previous practice exercise
// import LocationCard from "./location/LocationCard";
// import EmployeeCard from "./employee/EmployeeCard";
// import OwnerCard from "./owner/OwnerCard";

const ApplicationViews = () => {
    return (
        <React.Fragment>
            <Route
                exact
                path="/"
                render={props => {
                    return <Home />;
                }}
            />
             <Route path="/animals" render={(props) => {
      return <AnimalList />
    }} />
            {/* <Route
                path="/animals"
                render={props => {
                    return <AnimalCard />;
                }}
            /> */}
            <Route
                path="/owner"
                render={props => {
                    return <Owner />;
                }}
            />

            <Route
                path="/Employees"
                render={props => {
                    return <EmployeeCard />;
                }}
            />

            <Route
                path="/locations"
                render={props => {
                    return <LocationCard />;
                }}
            />
        </React.Fragment>
    );
};

export default ApplicationViews;