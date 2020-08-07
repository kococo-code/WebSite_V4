import React, { useState, useEffect } from 'react';
import Observe from '../util/DomObserve';
export default function Introduce(){
    const [scrollYoffset , setScrollYoffset] = useState(0);
    const [onBoard , setOnBoard] = useState(true);
    useEffect(()=>{
        const handleScroll = () =>{
            setScrollYoffset(window.pageYOffset);
        }
        window.addEventListener('scroll',handleScroll);
        return () => {
            window.removeEventListener('scroll',handleScroll);
        }
    },[])

    return(
        <section id="Introduce" {...Observe(setOnBoard,0.1)}>
            <header >
                <h3 style={onBoard ? {transform : `translateY(${scrollYoffset*1.0}px)`} : {transform : `translate3d(0,0,0)`}}>SoftWare Engineer, <span className="highlight">Jintaek Lim</span></h3>
                <p style={onBoard ? {transform : `translateY(${scrollYoffset*1.01}px)`} : {transform : `translate3d(0,0,0)`}}>Based @Seoul, Korea</p>
                <p style={onBoard ? {transform : `translateY(${scrollYoffset*1.02}px)`} : {transform : `translate3d(0,0,0)`}}>Using JavaScript and Python ,C++</p>
                <p style={onBoard ? {transform : `translateY(${scrollYoffset*1.03}px)`} : {transform : `translate3d(0,0,0)`}}>Knowledge as Information Security and Programming</p>
                <p style={onBoard ? {transform : `translateY(${scrollYoffset*1.04}px)`} : {transform : `translate3d(0,0,0)`}}>Intersting for Web Devlopment</p>
            </header>
        </section>
    )
}