import React, { useContext } from 'react';
import { Route, Switch } from "react-router-dom";
import CardDetails from "../containers/cardDetails";
import Main from '../containers/main';
import ThemeContext, { ThemeProvider } from '../context/themeContext';

const Routes = () => {
    // console.log('useContext --- ', useContext(ThemeContext));
    // const { theme, updateTheme } = useContext(ThemeContext);
    // console.log('----', theme);
    return (
        <Switch>
            <Route exact path="/" component={() => {
                return (
                    <ThemeProvider>
                        <Main />
                    </ThemeProvider>)
            }}  />
            <Route path="/country/:name" component={props => {
                return <CardDetails {...props} />
            }} />
        </Switch>
    )
}

export default Routes;