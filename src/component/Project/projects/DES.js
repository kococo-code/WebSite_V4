import React from 'react';
import {ProjectSection,ProjectName,ProjectContents,Stacklists,MorePages} from '../styled';

export default function DES(){
    return(
        <ProjectSection background="#000" fontColor="#eee">
            <ProjectName fontSize={2.5}>
                <p>
                    Data Encryption Standard
                </p>
                <p>
                    암호화 알고리즘(DES)
                </p>
               
            </ProjectName>
        </ProjectSection>
    )
}