import React from 'react';
import {ProjectSection,ProjectName,ProjectContents,Stacklists,MorePages} from '../styled';

export default function DES(){
    return(
        <ProjectSection background="#000" fontColor="#eee">
            <ProjectName fontSize={2.5}>
                <p>
                    <span>Data Encryption Standard</span>
                </p>
                <p>
                    <span>암호화 알고리즘(DES)</span>
                </p>
               
            </ProjectName>
        </ProjectSection>
    )
}