import React , {useState} from 'react';
import Introduce from './Introduce/Introduce';
import PictureComponent from './PictureComponent/PictureComponent';
import Project from './Project/project';
export default function Main(){
    return(
        <div>
            <Introduce></Introduce>
            <PictureComponent></PictureComponent>
        </div>
    )
}