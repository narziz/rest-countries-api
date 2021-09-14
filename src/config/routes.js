import React, { useState, useContext } from 'react';
import { Route, Switch, useHistory } from "react-router-dom";
import CardDetails from "../containers/cardDetails";
import Main from '../containers/main';


const Routes = (props) => {
    return (
        <Switch>
            <Route exact path="/" component={() => {
                return  <Main theme={props.theme} />
            }}  />
            <Route path="/country/:name" component={prop => {
                return <CardDetails theme={props.theme} {...prop} />
            }} />
        </Switch>
    )
}

export default Routes;