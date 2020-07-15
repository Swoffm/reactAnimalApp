import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import OwnerList from "./owner/OwnerList"
import EmployeeList from "./EmployeeCard/EmployeeList"
import AnimalList from "./animal/AnimalList"
import LocationList from "./locations/LocationsList"
import AnimalDetail from "./animal/AnimalDetail"
import LocationDetails from "./locations/LocactionDetails"
import AnimalForm from './animal/AnimalForm'
import Login from "./auth/Login";
import AnimalEditForm from "./animal/AnimalEditForm"
import LocationFormEdit from "./locations/LocationsFormEdit"
import LocationForm from "./locations/LocationForm"
import EmployeeForm from "./EmployeeCard/EmployeeForm"
import EmployeeEditForm from "./EmployeeCard/EmployeeEditForm"
import OwnerForm from "./owner/OwnerForm"

const ApplicationViews = () => {
    // Check if credentials are in session storage returns true/false
    const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
    return (
        <React.Fragment>
            <Route
                exact
                path="/"
                render={props => {
                    if (isAuthenticated()) {
                        return <Home {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }

                }}
            />

            <Route path="/login" component={Login} />
            {/* Make sure you add the `exact` attribute here */}
            <Route exact path="/animals" render={props => {
                if (isAuthenticated()) {
                    return <AnimalList {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }} />
            <Route
               exact path="/owner"
                render={props => {
                    if (isAuthenticated()) {
                        return <OwnerList {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }

                }}
            />

            <Route
               exact path="/Employees"
                render={props => {
                    if (isAuthenticated()) {
                        return <EmployeeList {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }}
            />

            <Route
                exact path="/locations"
                render={props => {
                    if (isAuthenticated()) {
                        return <LocationList {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }

                }}
            />

            <Route
                exact path="/animals/:animalId(\d+)"
                render={props => {
                    // Pass the animalId to the AnimalDetailComponent
                    return (
                        <AnimalDetail
                            animalId={parseInt(props.match.params.animalId)}
                            {...props}
                        />
                    );
                }}
            />
            <Route path="/employees/:employeesId(\d+)/edit" render={props => {
                if (isAuthenticated()) {
                    return <EmployeeEditForm {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }} />


            <Route path="/animals/:animalId(\d+)/edit" render={props => {
                if (isAuthenticated()) {
                    return <AnimalEditForm {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }} />
            <Route path="/locations/:locationId(\d+)/edit" render={props => {
                if (isAuthenticated()) {
                    return <LocationFormEdit {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }} />


            <Route exact path="/locations/:locationId(\d+)"
                render={(props) => {
                    // Pass the animalId to the AnimalDetailComponent
                    return (
                        <LocationDetails locationsId={parseInt(props.match.params.locationId)}
                            {...props}
                        />)
                }} />


            <Route path="/animals/new" render={(props) => {
                return <AnimalForm {...props} />
            }} />
            <Route path="/owner/new" render={(props) => {
                return <OwnerForm {...props} />
            }} />
            <Route path="/locations/new" render={(props) => {
                return <LocationForm {...props} />
            }} />
             <Route path="/employees/new" render={(props) => {
                return <EmployeeForm {...props} />
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