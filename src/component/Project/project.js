import React, { useEffect , useState } from 'react';
import flightMapImage from '../../assets/image/flight_map.jpg';
import DashBoardImage from '../../assets/image/dashboard.jpg';
import circle from '../../assets/image/circle1.png';
import CustomButton from '../util/CustomButton';
function Project(){

    return(
        <section id="ProjectArchive">
            <section id="ProjectStartWording">
                Works
                <img src={circle}></img>
            </section>
            <section className="container">
                <div className="cards">
                    <div className="ProjectName">
                       94rising.xyz
                    </div>
                    <div className="ProjectExplain">
                        <p>Personal WebSite</p>
                        <p>Serve as Nginx Cache</p>
                        <p>Apply SSL/TLS</p>

                    </div>
                    <div className="Stacks">
                        <li>Nginx</li>
                        <li>React JS</li>
                        <li>AWS EC2</li>
                        <li>AWS Route 53</li>

                    </div>
                    <div className="Buttons">
                        <a className="Button" target="_blank" href="https://www.github.com/kococo-code/Website_V4">Github</a>
                    </div>                 
                </div>
                <div id="flightFinder" className="cards">
                    <div className="ProjectName">
                        Flight Finder
                    </div>
                    <div className="ProjectExplain">
                        <p>Easy to find Flight Ways!</p>
                        <p>Using <span>ReactJS</span> Service on <span>EC2</span> with <span>Flask</span> </p>
                        <p>Flight source from Kayak.com</p>
                        <p>Will be update flight States</p>
                   </div>
                   <div className="Stacks">
                        <li>React JS</li>
                        <li>Deck GL</li>
                        <li>Python Flask</li>
                        <li>AWS RDS</li>
                       
                    </div>
                    <div className="Buttons">
                        <a className="Button" target="_blank" href="https://github.com/kococo-code/React-Leaflet-deckgl">Github</a>
                        <a className="Button Demo" target="_blank" href="https://94rising.xyz/flights">Try Demo!</a>

                    </div> 
                </div>
                <div className="cards">
                    <div className="ProjectName">
                        Image Classification Traniner
                    </div>
                    <div className="ProjectExplain">
                        <p>Easy To make Image Classification Model</p>
                        <p>Just Setting HyperParameters</p>
                        <p>I was following <a target="_blank" href="https://www.tensorflow.org/api_docs/python/tf/keras">Keras API</a></p>
                        <p>DashBoard <span>React Js</span>, <span>Recharts</span></p>

                    </div>
                    <div className="Stacks">
                        <li>Tensorflow</li>
                        <li>React JS</li>
                        <li>Python Flask</li>
                        <li>Rechart JS</li>
                    </div>
                    <div className="Buttons">
                        <a className="Button" target="_blank" href="https://github.com/kococo-code/Tensorflow_Automatic_Training">Github</a>
                        <a className="Button Demo" target="_blank" href="https://94rising.xyz/dashboard">Try Demo</a>
                    </div> 
                </div>
                <div className="cards">
                    <div className="ProjectName">
                        Data Encryption Standard
                    </div>
                    <div className="ProjectExplain">
                        <p>Cryptography Encryption Assignment</p>
                        <p>Make for Data Encryption Standard(1989)</p>
                        <p><span>56bits Key</span>,<span>ECB Mode</span>,<span>C/C++</span></p> 

                    </div>
                    <div className="Stacks">
                        <li>C/C++</li>
                    </div>
                    <div className="Buttons">
                        <a className="Button" target="_blank" href="https://www.github.com/kococo-code/des">Github</a>
                    </div>                 
                </div>
            </section>

        </section>
    )


}
export default Project;