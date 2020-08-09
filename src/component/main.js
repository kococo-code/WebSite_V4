import React , {useState} from 'react';
import Topbar from './navbar/topbar';
import Introduce from './Introduce/Introduce';
import Project from './Project/project';
export default function Main(){
    return(
        <div>
            <Topbar></Topbar>
            <Introduce></Introduce>
            <Project></Project>
        </div>
    )
}