import React , {useState} from 'react';
import {ProjectSection,ProjectName,ProjectContents,Stacklists,Button,PrevButton,NextButton,MorePages} from '../styled';
import flight_map from '../../../assets/image/flight_map.jpg';
export default function FlightFinder(){
    const [currentPage,setCurrentPage] = useState(0);
    function moveNext(){
        setCurrentPage(currentPage+1);
    }
    function movePrev(){
        setCurrentPage(currentPage-1);
    }
    return(
        <React.Fragment>
        <ProjectSection background="#000" fontColor="#eee" pages={currentPage}>
            <ProjectName fontSize={3.8}>
                <p>
                    <span>Flight Finder</span>
                </p>
                <p>
                    <span>항공권 검색 및 시각화</span>
                </p>
            </ProjectName>
            <ProjectContents>
            <p>세계일주 당시에 편도 직항보다는 허브공항 + 허브공항으로 묶는 항공권이 10% ~ 30% 저렴한 것을 발견했습니다.  </p>
            <p>따라서 또 다른 장기여행시에 사용할 데이터를 수집 및 이용을 할 목적으로 구축하였습니다. </p>
            <p><a href="https://kayak.com" target="_blank">Kayak.com</a>의 데이터로 허브공항 그리고 허브공항에서 지방공항간의 데이터를 수집하고 추후에 다익스트라와 같은 최단거리 알고리즘을 이용해 허브공항 + 허브공항 + 지방공항으로 이어져 항공권을 추천하는 프로그램으로 발전시킬 예정입니다.</p>

            <p>현재는 구축한 API를 통해 Selenium + Firefox + bs4로 데이터를 수집하고 있습니다.</p>
            <p><a href={"https://94rising.xyz/api/price/tickets?departure=ICN&arrival=FRA&departure-date=2020-10-10"} target="_blank">Ticket API</a> 을 Python Flask로 구축해 데이터를 전송합니다.</p>
            *API는 추후 Swagger UI로 표현 할 예정입니다.
            </ProjectContents>
            <Stacklists>
                <li>React.JS</li>
                <li>Deck.gl</li>
                <li>Python Flask</li>
                <li>SQL-Alchemy</li>
                <li>AWS EC2</li>
                <li>AWS RDS</li>
            </Stacklists>
            <Button href={"https://94rising.xyz/flights"} bottom={100} left={100}>Demo</Button>
            <Button href={"https://www.github.com/React-leaflet-deckgl"} bottom={100} left={200}>Front Demo</Button>
            <Button href={"https://www.github.com/FlightDataServer"} bottom={100} left={340}>Server Demo</Button>
            <NextButton onClick={moveNext}></NextButton>
            <MorePages PagesNum={1}>
                <PrevButton onClick={movePrev}></PrevButton>
            </MorePages>
        </ProjectSection>
      
        </React.Fragment>
    )
}