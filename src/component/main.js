import React , {useState} from 'react';
import Introduce from './Introduce/Introduce';
import Project from './Project/project';
export default function Main(){
    return(
        <div>
            <Introduce></Introduce>
            <Project></Project>
        </div>
    )
}