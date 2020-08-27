import React from 'react';
import {ProjectSection,ProjectName,ProjectContents,Stacklists,MorePages} from '../styled';
import Button from '../../util/CustomButton';

export default function DashBoard(){
    return(
        <ProjectSection background="#000" fontColor="#eee">
            <ProjectName fontSize={3.5}>
                <p>ImageML_AutoTrainer</p>
                <p>이미지 자동 학습기</p>
            </ProjectName>
            <ProjectContents>
                <p>
                    Tensorflow <a href="">Keras API</a>를 이용해
                </p>
            </ProjectContents>
            <Stacklists>
                <li>React.JS</li>
                <li>Python Flask</li>
                <li>Tensorflow</li>
                <li>Rechart.JS</li>
            </Stacklists>
            <Button top={800} left={100} href={"https://github.com/kococo-code/Tensorflow_Automatic_Training"} target="_blank" text="Github"></Button>
            <Button top={800} left={220} href={"https://94rising.xyz/dashboard"} target="" text="Dashboard Demo"></Button>
           
        </ProjectSection>
    )
}