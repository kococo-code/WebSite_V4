import React, { useEffect , useState } from 'react';
import WebSite from './projects/Website';
import FlightFinder from './projects/FlightFinder';
import DashBoard from './projects/Dashboard';
import DES from './projects/DES';
import {ProjectComponent} from './styled';
function Project(){
    return(
        <ProjectComponent>
            <FlightFinder/>              
            <DES/>
            <DashBoard/>
            <WebSite/>
        </ProjectComponent>
    )
}
export default Project;