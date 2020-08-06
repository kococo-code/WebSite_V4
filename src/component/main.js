import React , {useState} from 'react';
import Introduce from './Introduce/Introduce';
import WordRotate from './Introduce/wordRotate';
import Project from './Project/project';
export default function Main(){
    return(
        <div>
            <Introduce></Introduce>
            <WordRotate></WordRotate>
            <Project></Project>
        </div>
    )
}