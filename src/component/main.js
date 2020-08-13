import React , {useState} from 'react';
import Topbar from './navbar/topbar';
import Introduce from './Introduce/Introduce';
import Project from './Project/project';
import Welcome from './Welcome';
import TravelArchive from './travelarchive/travelArchive';
export default function Main(){
    return(
            <div>
                <Topbar></Topbar>
                <Introduce></Introduce>
                <TravelArchive></TravelArchive>
                <Project></Project>
            </div>
        )
    
 
      
            
            
        
        
    
}