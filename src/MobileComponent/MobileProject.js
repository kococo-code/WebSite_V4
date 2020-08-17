import React from 'react';

export default function MobileProject(){
    

    function handleProjectClick(e){
        e.preventDefault();
        console.log(e.target.data);
    }



    return(
        <section id="Mobile_Project">
                <p className="wording">Projects</p>
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
                   <a className="Button github" target="_blank" href="https://github.com/kococo-code/React-Leaflet-deckgl">Github</a>
                   <a className="Button demo" href="/flights">Demo</a>

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
                    
                    <a className="Button github" target="_blank" href="https://github.com/kococo-code/Tensorflow_Automatic_Training">Github</a>
                   <a className="Button demo" href="/dashboard">Demo</a>
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
                    <a className="Button github-des" target="_blank" href="https://github.com/kococo-code/des">Github</a>
                </article>
                <div className="underline">
                    Hover on Card!
                </div>
            </section>
        </section>
    )
}