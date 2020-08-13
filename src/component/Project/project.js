import React, { useEffect , useState } from 'react';
import flightMapImage from '../../assets/image/flight_map.jpg';
import DashBoardImage from '../../assets/image/dashboard.jpg';
import circle from '../../assets/image/circle1.png';
import CustomButton from '../util/CustomButton';
function Project(){
    const [scrollYoffset , setYoffset] = useState(0);
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
                        <div className="ProjectInfo">
                        <strong>Flight Tracking Map</strong>
                        <CustomButton targetUrl="https://github.com/kococo-code/React-Leaflet-deckgl" name="Github" top="20px" left="550px"/>
                        <CustomButton targetUrl="/demo" name="Demo" top="20px" left="670px"/>
                        </div>
                        <div className="ImgContainer">
                        <img src={flightMapImage} width="800" height="400"></img>
                        </div>
                        <div className="stacks" >
                            <li >React JS</li>
                            <li>Python Flask</li>
                            <li>Deck GL</li>
                            <li>AWS EC2</li>
                            <li>AWS RDS</li>
                        </div>
                        <div className="Explain">
                            Flight Finder for 
                        </div>

                    </article>
                    <article className="ProjectContainer second" >
                        <div className="ProjectInfo trainer">
                            <strong>Automatic Trainer</strong>
                            <CustomButton targetUrl="https://github.com/kococo-code/Tensorflow_Automatic_Training" name="Github" top="20px" left="500px"/>
                            <CustomButton targetUrl="/demo" name="Demo" top="20px" left="620px"/>
                            </div>
                        <div className="ImgContainer">
                            <img src={DashBoardImage} width="800" height="600"></img>
                            
                        </div>
                        <div className="stacks">
                            <li>React JS</li>
                            <li>Python Flask</li>
                            <li>Tensorflow</li>
                            <li>Rechart Js</li>
                        </div>
                        <div className="Explain">
                        
                        </div>

                    </article>
                    <div className="threshold" />
            </section>

        </section>
    )


}
export default Project;