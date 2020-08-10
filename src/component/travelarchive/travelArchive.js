import React , {useEffect,useState} from 'react';
import Siberia from '../../assets/image/Siberia.jpg';
import Himalaya from '../../assets/image/Himalaya.jpg';
import Budapest from '../../assets/image/budapest.jpg';
import Copacabana from '../../assets/image/copacabana.jpg';
import AsyncPictureGet from './PictureDisplay';
import PictureInformation from './PictureInformation';
import setInformation from './setInformation';
export default function TravelArchive(){

    const [currentJSONInfo , setJSONInfo] = useState('');

    function PictureDisplay(target){
        const locationBox = document.getElementsByClassName('locationBox')[0];
        switch(target){
            case 'Europe':
                locationBox.textContent = 'Europe';
                break;
            case 'Siberia':
                locationBox.textContent = 'Siberia Train and Arctic';

                break;
            case 'India':
                locationBox.textContent = 'India and SE Asia';

                break;
            case 'SA':
                locationBox.textContent = 'South America';

                break;
        }
        AsyncPictureGet(target);
        PictureInformation(target,setJSONInfo);
        console.log(currentJSONInfo);
        setInformation(1,currentJSONInfo);

    }
    
    function handleonClick(e){
        const ParanomaBox = document.getElementsByClassName('ParanomaBox')[0];
        if(e.target.className === 'BackBtn'){
            ParanomaBox.setAttribute('class' ,`ParanomaBox`);
            ParanomaBox.style = "z-index :-1 ; opacity : 0";
        }
        else{
            console.log(e.target.className.split(' ')[0])
            ParanomaBox.setAttribute('class' ,`ParanomaBox ${e.target.className.split(' ')[0]}`);
            ParanomaBox.style = "z-index :3 ; opacity : 1";
            PictureDisplay(e.target.className.split(' ')[0]);
        }
    }
    
    
    return (
        
        <section id="TravelArchive">
            <div className="containerStartIndicator">
                    <h1>Travel</h1>
                </div>
            <section className="Boxcontainer">
                <article className="MemoryBox Europe" onClick={handleonClick}>
                    <h1>Europe</h1>
                    <h2>2016.05 - 2016.07</h2>
                    <img className="Europe image_reverse" src={Budapest} width={1000} height={1000}></img>
                </article>
                <article className="MemoryBox Siberia"  onClick={handleonClick}>
                        <h1>Siberia Train <p>and</p> Arctic</h1>
                        <h2>2017.07 - 2017.08</h2>
                        <img className="Siberia" src={Siberia}></img>
                </article>
                <article className="MemoryBox India" onClick={handleonClick}>
                        <h1>India <p>and</p> SE Asia</h1>
                        <h2>2019.01 - 2019.03</h2>
                        <img className="India image_reverse" src={Himalaya} width={800} height={1000}></img>
                </article>
                <article className="MemoryBox SA" onClick={handleonClick}>
                        <h1>South America</h1>
                        <h2>2019.12 - 2020.02</h2>
                        <img className="SA" src={Copacabana} width={800} height={1000}></img>
                </article>
                <article className="ParanomaBox">
                        <div className="locationBox"></div>
                        <img className="PhotoPlace"></img>
                        <div className="PictureInformation">
                            <div className="dateInfo"></div>
                            <div className="locationInfo"></div>
                        </div>
                        <div className="BackBtn" onClick={handleonClick}>
                            Back
                        </div>
                </article>
            </section>


        </section>


    )
}