import React, { useState, useEffect } from 'react';
import Observe from '../util/DomObserve';
import Face from '../../assets/image/face.png';
import underlineLime from '../../assets/image/underline2.png';

export default function Introduce(){
    const [scrollYoffset , setScrollYoffset] = useState(0);
    const [onBoard , setOnBoard] = useState(true);
    const params ={
        'AvrDelay' : 0, // Control FadeIn Delay
        'ObserveThreshold' : .1, // Observer Callback Interaction Threshold
        'AnimationDuration' : 1 // FadeIn Animation Duration 
    }

    // Will be Modify Animation     
  
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
        <section id="Introduce">
            <div>
                <img className="face" src={Face} style={onBoard ? {transform : `translateY(${scrollYoffset*0.2}px)`} : {transform : `translate3d(0,0,0)`}}/>
            </div>
            <header>
                    <h3>SoftWare Engineer, Jintaek Lim</h3>
                    <img className='highlight' src={underlineLime}></img>
                    <p>Based @Seoul, Korea</p>
                    <p>Using JavaScript and Python ,C++</p>
                    <p>Knowledge as Information Security and Programming</p>                
                    <p>Intersting for Web Devlopment</p>
            </header>
            
        </section>
    )
}