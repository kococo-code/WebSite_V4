import React from 'react';
import DashBoard from '../assets/image/dashboard.jpg';
import FlightMap from '../assets/image/flight_map.jpg';
import underline from '../assets/image/underline2.png';

export default function MobileProject(){
    
    return(
        <section id="Mobile_Project">
            <div className="startIndicator">
                <span>Project</span>                
                <img src={underline}></img>
            </div>
            <section id="Projects_Container">
                <article className="Project first">
                    <h1>Flight Finder</h1>
                    <div className="ProjectExplain">
                        Find Flight Route with Kayak.com Data
                    </div>
                    <div className="Stacks">
                        <li>React JS</li>
                        <li>Python Flask</li>
                        <li>Deck Gl</li>
                        <li>My SQL</li>
                        <li>AWS EC2</li>
                        <li>AWS RDS</li>
                   </div>
                </article>
                <article className="Project second">
                    <h1>AutoMatic Trainer</h1>
                    <div className="ProjectExplain">
                        Automatic Trainer for Image Classification with Tensorflow 
                    </div>
                    <div className="Stacks">
                        <li>React JS</li>
                        <li>Python Flask</li>
                        <li>Tensorflow</li>
                        <li>D3.JS</li>
                    </div>
                </article>
                <article className="Project third">
                    <h1>DES</h1>
                    <div className="ProjectExplain">
                        Encryption Protocol Univ Assignment
                        <p>Data Encryption Standard</p>
                    </div>
                    <div className="Stacks">
                        <li>C/C++</li>
                        <li>Encryption</li>
                    </div>
                </article>
                <div className="underline">
                    Click the Card!
                </div>
            </section>
        </section>
    )
}