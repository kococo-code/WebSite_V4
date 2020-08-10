import React , {useState} from 'react';
import Topbar from './navbar/topbar';
import Introduce from './Introduce/Introduce';
import Project from './Project/project';
import Welcome from './Welcome';
import TravelArchive from './travelarchive/travelArchive';

export default function Main(){
    if(window.navigator.userAgent.indexOf('Trident')===true){
        /// IE 
        return(
            <div id="IE">
                Not Support
            </div>
        )
    }
    else{
        return(
            <div>
                <Topbar></Topbar>
                <Introduce></Introduce>
                <TravelArchive></TravelArchive>
                <Project></Project>
            </div>
        )
    }
 
      
            
            
        
        
    
}