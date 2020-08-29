import React , {useState} from 'react';
import TopbarComponent from './navbar/topbar';
import Introduce from './Introduce/Introduce';
import Project from './Project/projectComponent';
export default function Main(){
    return(
            <React.Fragment>
                <TopbarComponent></TopbarComponent>
                <Introduce></Introduce>
                <Project></Project>
            </React.Fragment>
        )       
}