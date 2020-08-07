import React, { useEffect , useState } from 'react';
import wordCreate from './WordsBackgroundCreator'; 
import BrightWord from './WordBright';
import BackgroundController from './BackgroundController';
import flightMapImage from '../../assets/image/flight_map.jpg';
import DashBoardImage from '../../assets/image/dashboard.jpg';

import CustomButton from '../util/CustomButton';
import useScrollFadeIn from '../util/fadeInProperty';
function PictureComponent(){

    const [firstHover , setfirstHover] = useState(false);
    const [scrollYoffset , setYoffset] = useState(0);
    
    const leftFadeIn = useScrollFadeIn('right',0.7,0.5,0.9);


    // Scroll Event Listener
    useEffect(()=>{
        wordCreate();
        const target = document.getElementById('TravelArchive');
        const targetHeight = target.getBoundingClientRect().top;
        const handleYoffset = ()=>{
            if(window.pageYOffset > targetHeight &&  window.pageYOffset < 5000){
               setYoffset(window.pageYOffset-targetHeight);
            }else if(window.pageYOffset < targetHeight){
               setYoffset(0);
            }else{
                setYoffset(0);
            }
        }
        window.addEventListener('scroll',handleYoffset);
        return () => {
            window.removeEventListener('scroll' ,handleYoffset);
        }
    },[]);
    
    useEffect(()=>{
        BackgroundController();
        BrightWord();       

    },)

    function handleonHover(e){
        if(firstHover === false){
            setfirstHover(true);
            const flightsStackElement = document.getElementsByClassName('flights')[0];
            flightsStackElement.setAttribute('class','stacks flights visible');
        }else{
            setfirstHover(false);
            const flightsStackElement = document.getElementsByClassName('flights')[0];
            flightsStackElement.setAttribute('class','stacks flights');
        }
    }


    return(
        <section id="TravelArchive">
            <section className="container">
                
                    <div className="WordContainer normal"></div>
                    <article className="PictureContainer first" onMouseEnter ={handleonHover} onMouseLeave={handleonHover} >
                        <div className="PictureInfo">
                        <strong>Flight Tracking Map</strong>

                       
                        </div>
                        <div className="Imgcover">
                        <img src={flightMapImage} width="800" height="400" style={{transform : `scale(${1+(scrollYoffset/12000)})`}}></img>
                        </div>
                        <div className="stacks flights">
                            <li>React JS</li>
                            <li>Python Flask</li>
                            <li>Deck GL</li>
                            <li>AWS EC2</li>
                            <li>AWS RDS</li>
                        </div>
                        <CustomButton targetUrl="https://github.com/kococo-code/React-Leaflet-deckgl" name="Github" top="400px" left="900px"/>
                        <CustomButton targetUrl="/demo" name="Demo" top="400px" left="1050px"/>

                    </article>
                    <article className="PictureContainer second" >
                        <div className="PictureInfo trainer">
                            <strong>Automatic Trainer</strong>
                            </div>
                        <div className="Imgcover">
                            <img src={DashBoardImage} width="800" height="600" style={{transform : `scale(${1+(scrollYoffset/16000)}`}}></img>
                        </div>
                        <CustomButton targetUrl="https://github.com/kococo-code/Tensorflow_Automatic_Training" name="Github" top="600px" left="900px"/>
                        <CustomButton targetUrl="/demo" name="Demo" top="600px" left="1050px"/>

                    </article>
                    <div className="threshold" />
            </section>

        </section>
    )


}
export default PictureComponent;