import React from 'react';

import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

import { Main } from '../Components/Main';
import { List } from '../Components/list';
class Router extends React.Component {
    

    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Main}></Route>
                    <Route exact path="/list" component={List}></Route>
                </Switch>
            </BrowserRouter>
        );
    }
}
export default Router;