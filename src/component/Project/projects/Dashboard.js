import React from 'react';
import {ProjectSection,ProjectName,ProjectContents,Stacklists,MorePages} from '../styled';

export default function DashBoard(){
    return(
        <ProjectSection background="#000" fontColor="#eee">
            <ProjectName fontSize={3.5}>
                <p>ImageML_AutoTrainer</p>
                <p>이미지 자동 학습기</p>
            </ProjectName>
            <ProjectContents>
                <p>
                    Tensorflow <a href="">Keras API</a>를 이용해 구축한 프로그램입니다.
                </p>
                <p>
                    HyperParameter인 
                </p>
            </ProjectContents>
            <Stacklists>
                <li>React.JS</li>
                <li>Python Flask</li>
                <li>Tensorflow</li>
                <li>Rechart.JS</li>
            </Stacklists>
         
        </ProjectSection>
    )
}