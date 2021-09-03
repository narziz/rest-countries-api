import React from 'react';
import { Route, Switch } from "react-router-dom";
import CardDetails from "../containers/cardDetails";
import Main from '../containers/main';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Main}  />
            <Route path="/country/:name" component={props => {
                return <CardDetails {...props} />
            }} />
        </Switch>
    )
}

export default Routes;