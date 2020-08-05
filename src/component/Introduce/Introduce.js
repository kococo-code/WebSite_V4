import React, { useState, useEffect } from 'react';
import Observe from '../util/DomObserve';
export default function Introduce(){
    const [mousePos , setMousePos] = useState({x:undefined,y:undefined});
    const [onBoard , setOnBoard] = useState(true);
    const mouseTrackingThreshold = 30;
    useEffect(()=>{
        const handleMousePosition = ev =>{
            setMousePos({x:ev.clientX,y:ev.clientY});
        }
        window.addEventListener('mousemove',handleMousePosition);
        return () =>{
            window.removeEventListener('mousemove',handleMousePosition);
        }
    },[])
    return(
        <section id="Introduce" {...Observe(setOnBoard,0.1)}>
            <header style={onBoard ? {transform:`translate3d(${mousePos.x/mouseTrackingThreshold}px,${mousePos.y/mouseTrackingThreshold}px,0px)`} : {transform : `translate3d(0,0,0)`}}>
                <h3>SoftWare Engineer, <span className="highlight">Jintaek Lim</span></h3>
                <p>Based @Seoul, Korea</p>
                <p>Using JavaScript and Python ,C++</p>
                <p>Knowledge as Information Security and Programming</p>
                <p>Intersting for Web Devlopment</p>
            </header>
        </section>
    )
}