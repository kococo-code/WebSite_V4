import React from 'react';
import {ProjectComponent ,ProjectSection,ProjectName,ProjectContents,Stacklists} from '../styled';
import Button from '../../util/CustomButton';

export default function WebSite(){
    return (
        <ProjectSection background="#000" fontColor="#eee">
        <ProjectName fontSize={3.8}>
            <p>
                <span>
                    94rising.xyz
                </span>
            </p>
            <p>
                <span>
                    Web Portfolio Sites
                </span>
            </p>

        </ProjectName>
        <ProjectContents>
                <p>React.JS와 Nginx를 이용해 포트폴리오 사이트를 구축</p>
                <p>가비아에서 구입한 .xyz를 AWS Route53을 통해 라우팅합니다.</p>
                <p>AWS EC2에 AWS_CLI를 통해서 배포합니다.</p>

        </ProjectContents>  
        <Stacklists>
            <li>Nginx</li>
            <li>React JS</li>
            <li>CSS-in-JS</li>
            <li>AWS EC2</li>
            <li>AWS Route 53</li>
        </Stacklists>
        <Button top={800} left={100} href={"https://github.com/kococo-code/WebSite_V4"} target="" text="Github Codes"/>
        </ProjectSection>
            
    )
}