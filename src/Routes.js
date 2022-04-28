import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const routes = [];

export const Routes = () => {
    return(
        <Router>
            { routes.map( (route, index) =>  (
                <Route 
                path={route.path} 
                key={index} 
                exact={route.exact}
                element={route.Component}/>
            )) }
        </Router>
    )
}