import React from 'react';
import {ProjectSection,ProjectName,ProjectContents,Stacklists,MorePages} from '../styled';
import Button from '../../util/CustomButton';

export default function FlightFinder(){
    return(
        <ProjectSection background="#000" fontColor="#eee">
            <ProjectName fontSize={3.8}>
                <p>
                    <span>Flight Finder</span>
                </p>
                <p>
                    <span>항공권 검색 및 시각화</span>
                </p>
            </ProjectName>
            <ProjectContents>
                <p><a href="https://kayak.com" target="_blank">Kayak.com</a> 에서 수집한 데이터를 이용해 항공권을 검색합니다.</p>
                <p><a href={"https://94rising.xyz/api/price/tickets?departure=ICN&arrival=FRA&departure-date=2020-10-10"} target="_blank">Ticket API</a> 을 Python Flask로 구축해 데이터를 전송합니다.</p>
            </ProjectContents>
            <Stacklists>
                <li>React.JS</li>
                <li>Deck.gl</li>
                <li>Python Flask</li>
                <li>AWS EC2</li>
                <li>AWS RDS</li>
            </Stacklists>
            <Button top={800} left={100} href={"https://github.com/kococo-code/React-leaflet-deckgl"} target="_blank" text="Github"></Button>
            <Button top={800} left={220} href={"https://github.com/kococo-code/FlightDataServer"} target="_blank" text="Server Code"></Button>
            <Button top={800} left={400} href={"https://94rising.xyz/flights"} target="" text="Demo"></Button>
            <MorePages PagesNum={1}></MorePages>
        </ProjectSection>
    )
}