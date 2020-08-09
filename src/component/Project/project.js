import React, { useEffect , useState } from 'react';
import wordCreate from './WordsBackgroundCreator'; 
import BrightWord from './WordBright';
import BackgroundController from './BackgroundController';
import flightMapImage from '../../assets/image/flight_map.jpg';
import DashBoardImage from '../../assets/image/dashboard.jpg';
import underline from '../../assets/image/underline.png';
import CustomButton from '../util/CustomButton';
import useScrollFadeIn from '../util/fadeInProperty';
function Project(){
    const [scrollYoffset , setYoffset] = useState(0);
    const upFadeIn = useScrollFadeIn('up',1,0.2,0.2);
    const upFadeInDelayed = useScrollFadeIn('up',.5,0.4,0.2);
    const upFadeInStackFirst = useScrollFadeIn('up',1,.7,.3);
    const upFadeInStackSecond = useScrollFadeIn('up',1.2,.7,.3);
    const upFadeInStackThird = useScrollFadeIn('up',1.4,.7,.3);
    const upFadeInStackFourth = useScrollFadeIn('up',1.6,.7,.3);
    const upFadeInStackFive = useScrollFadeIn('up',1.8,.7,.3);

    const upFadeInStack2First = useScrollFadeIn('up',1,.7,.3);
    const upFadeInStack2Second = useScrollFadeIn('up',1.2,.7,.3);
    const upFadeInStack2Third = useScrollFadeIn('up',1.4,.7,.3);
    const upFadeInStack2Fourth = useScrollFadeIn('up',1.6,.7,.3);
    const upFadeInStack2Five = useScrollFadeIn('up',1.8,.7,.3);

    // Scroll Event Listener
    useEffect(()=>{
        wordCreate();
        const target = document.getElementById('ProjectArchive');
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


    return(
        <section id="ProjectArchive">
            <section className="container">
                <div className="headline">
                    <h1>Works</h1>
                    <img className="underline" src={underline}></img>
                </div>
                    <div className="WordContainer normal"></div>
                    <article className="ProjectContainer first">
                        <div className="ProjectInfo" {...upFadeIn}>
                        <strong>Flight Tracking Map</strong>
                        </div>
                        <div className="ImgContainer" {...upFadeInDelayed}>
                        <img src={flightMapImage} width="800" height="400"></img>
                        </div>
                        <div className="stacks" >
                            <li {...upFadeInStackFirst}>React JS</li>
                            <li {...upFadeInStackSecond}>Python Flask</li>
                            <li {...upFadeInStackThird}>Deck GL</li>
                            <li {...upFadeInStackFourth}>AWS EC2</li>
                            <li {...upFadeInStackFive}>AWS RDS</li>
                        </div>
                        <CustomButton targetUrl="https://github.com/kococo-code/React-Leaflet-deckgl" name="Github" top="420px" left="500px"/>
                        <CustomButton targetUrl="/demo" name="Demo" top="420px" left="620px"/>

                    </article>
                    <article className="ProjectContainer second" >
                        <div className="ProjectInfo trainer">
                            <strong>Automatic Trainer</strong>
                            </div>
                        <div className="ImgContainer">
                            <img src={DashBoardImage} width="800" height="600"></img>
                        </div>
                        <div className="stacks">
                            <li {...upFadeInStack2First}>React JS</li>
                            <li {...upFadeInStack2Second}>Python Flask</li>
                            <li {...upFadeInStack2Third}>Tensorflow</li>
                            <li {...upFadeInStack2Fourth}>Rechart Js</li>
                        </div>
                        <CustomButton targetUrl="https://github.com/kococo-code/Tensorflow_Automatic_Training" name="Github" top="620px" left="500px"/>
                        <CustomButton targetUrl="/demo" name="Demo" top="620px" left="620px"/>

                    </article>
                    <div className="threshold" />
            </section>

        </section>
    )


}
export default Project;