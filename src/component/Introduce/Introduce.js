import React, { useState, useEffect } from 'react';
import Observe from '../util/DomObserve';
import Face from '../../assets/image/face.png';
import useScrollFadeIn from '../util/fadeInProperty';
export default function Introduce(){
    const [scrollYoffset , setScrollYoffset] = useState(0);
    const [onBoard , setOnBoard] = useState(true);

    const rightFadeIn = useScrollFadeIn('right',.5,.1,.2);
    const downFadeIn = useScrollFadeIn('down',1,.1,.2);
    const downFadeInDelayed = useScrollFadeIn('down',1,.3,.2);
    const downFadeInDelayed2 = useScrollFadeIn('down',1,.5,.2);
    const downFadeInDelayed3 = useScrollFadeIn('down',1,.7,.2);
    const downFadeInDelayed4 = useScrollFadeIn('donw',1 , .9 , .2);
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
            <div {...rightFadeIn}>
                <img src={Face} style={onBoard ? {transform : `translateY(${scrollYoffset*0.6}px)`} : {transform : `translate3d(0,0,0)`}}/>
            </div>
            <header style={onBoard ? {transform : `translateY(${scrollYoffset*1.2}px)`} : {transform : `translate3d(0,0,0)`}}>
                    <h3 {...downFadeIn}>SoftWare Engineer, <span className="highlight">Jintaek Lim</span></h3>
                    <p {...downFadeInDelayed}>Based @Seoul, Korea</p>
                    <p {...downFadeInDelayed2}>Using JavaScript and Python ,C++</p>
                    <p {...downFadeInDelayed3}>Knowledge as Information Security and Programming</p>                
                    <p {...downFadeInDelayed4}>Intersting for Web Devlopment</p>
            </header>
        </section>
    )
}