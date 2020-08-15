import React from 'react';
import {Route} from 'react-router-dom';
import MapComponent from './Flights/component/map';
import DashBoardDemo from './DashBoardDemo/ImageClassification';
import App from './App'
export default function Router(){
    return(
    <div>
        <Route exact path='/' component={App}></Route>
        <Route path='/flights'>
            <MapComponent></MapComponent>
        </Route>
        <Route path="/DashBoard">
            <DashBoardDemo></DashBoardDemo>
        </Route>
    </div>
    )
}