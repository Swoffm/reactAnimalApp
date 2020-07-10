import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import OwnerList from "./owner/OwnerList"
import EmployeeList from "./EmployeeCard/EmployeeList"
import AnimalList from "./animal/AnimalList"
import LocationList from "./locations/LocationsList"


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
            <Route
                path="/owner"
                render={props => {
                    return <OwnerList />;
                }}
            />

            <Route
                path="/Employees"
                render={props => {
                    return <EmployeeList />;
                }}
            />

            <Route
                path="/locations"
                render={props => {
                    return <LocationList />;
                }}
            />
        </React.Fragment>
    );
};

export default ApplicationViews;