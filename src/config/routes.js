import React, { useContext } from 'react';
import { Route, Switch } from "react-router-dom";
import CardDetails from "../containers/cardDetails";
import Main from '../containers/main';
import ThemeContext from '../config/themeContext';

const Routes = () => {
    const theme = useContext(ThemeContext);
    console.log('----', theme);
    return (
        <Switch>
            <Route exact path="/" component={() => {
                return <Main theme={theme} />
            }}  />
            <Route path="/country/:name" component={props => {
                return <CardDetails {...props} />
            }} />
        </Switch>
    )
}

export default Routes;