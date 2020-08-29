import React from 'react';
import {ProjectSection,ProjectName,ProjectContents,Stacklists,ProjectImage} from '../styled';
import flight_map from '../../../assets/image/flight_map.jpg';
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
            
        </ProjectSection>
    )
}