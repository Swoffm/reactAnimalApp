import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import OwnerList from "./owner/OwnerList"
import EmployeeList from "./EmployeeCard/EmployeeList"
import AnimalList from "./animal/AnimalList"
import LocationList from "./locations/LocationsList"
import AnimalDetail from "./animal/AnimalDetail"


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
            {/* Make sure you add the `exact` attribute here */}
            <Route exact path="/animals" render={(props) => {
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

            <Route path="/animals/:animalId(\d+)" render={(props) => {
                // Pass the animalId to the AnimalDetailComponent
                return <AnimalDetail animalId={parseInt(props.match.params.animalId)} />
            }} />

            {/*
  This is a new route to handle a URL with the following pattern:
  http://localhost:3000/animals/1

  It will not handle the following URL because the `(\d+)`
  matches only numbers after the final slash in the URL
  http://localhost:3000/animals/jack
*/}
        </React.Fragment>
    );
};

export default ApplicationViews;