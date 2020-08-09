import React, { useEffect , useState } from 'react';

import flightMapImage from '../../assets/image/flight_map.jpg';
import DashBoardImage from '../../assets/image/dashboard.jpg';
import circle from '../../assets/image/circle1.png';

import CustomButton from '../util/CustomButton';
import useScrollFadeIn from '../util/fadeInProperty';
function Project(){
    const [scrollYoffset , setYoffset] = useState(0);
    const upFadeIn = useScrollFadeIn('up',1,0.2,0.2);
    const upFadeInDelayed = useScrollFadeIn('up',2,0.4,0.2);
    const upFadeInStackFirst = useScrollFadeIn('up',1,.7,.3);
    const upFadeInStackSecond = useScrollFadeIn('up',1.2,.7,.3);
    const upFadeInStackThird = useScrollFadeIn('up',1.4,.7,.3);
    const upFadeInStackFourth = useScrollFadeIn('up',1.6,.7,.3);
    const upFadeInStackFive = useScrollFadeIn('up',1.8,.7,.3);


    const ImgupFadeIn = useScrollFadeIn('up',1,0.2,0.2);

    const upFadeInStack2First = useScrollFadeIn('up',1,.7,.3);
    const upFadeInStack2Second = useScrollFadeIn('up',1.2,.7,.3);
    const upFadeInStack2Third = useScrollFadeIn('up',1.4,.7,.3);
    const upFadeInStack2Fourth = useScrollFadeIn('up',1.6,.7,.3);

    // Scroll Event Listener
    useEffect(()=>{
       // wordCreate();
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
        // BackgroundController();
        // BrightWord();       

    },)


    return(
        <section id="ProjectArchive">
            <section className="container">
                <div className="containerStartIndicator">
                    <h1>Works</h1>
                    <img src={circle}/>
                </div>
                    
                    <article className="ProjectContainer first">
                        <div className="ProjectInfo" {...upFadeIn}>
                        <strong>Flight Tracking Map</strong>
                        <CustomButton targetUrl="https://github.com/kococo-code/React-Leaflet-deckgl" name="Github" top="20px" left="550px"/>
                        <CustomButton targetUrl="/demo" name="Demo" top="20px" left="670px"/>
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
                    

                    </article>
                    <article className="ProjectContainer second" >
                        <div className="ProjectInfo trainer">
                            <strong>Automatic Trainer</strong>
                            <CustomButton targetUrl="https://github.com/kococo-code/Tensorflow_Automatic_Training" name="Github" top="20px" left="500px"/>
                            <CustomButton targetUrl="/demo" name="Demo" top="20px" left="620px"/>
                            </div>
                        <div className="ImgContainer" {...ImgupFadeIn}>
                            <img src={DashBoardImage} width="800" height="600"></img>
                            
                        </div>
                        <div className="stacks">
                            <li {...upFadeInStack2First}>React JS</li>
                            <li {...upFadeInStack2Second}>Python Flask</li>
                            <li {...upFadeInStack2Third}>Tensorflow</li>
                            <li {...upFadeInStack2Fourth}>Rechart Js</li>
                        </div>
                       

                    </article>
                    <div className="threshold" />
            </section>

        </section>
    )


}
export default Project;