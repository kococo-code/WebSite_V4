import React, { useState, useEffect } from 'react';
import Observe from '../util/DomObserve';
import Face from '../../assets/image/face.png';
import useScrollFadeIn from '../util/fadeInProperty';
import underlineLime from '../../assets/image/underline2.png';
import arrow from '../../assets/image/arrow.png';
import face2 from '../../assets/image/face2.png';
export default function Introduce(){
    const [scrollYoffset , setScrollYoffset] = useState(0);
    const [onBoard , setOnBoard] = useState(true);
    const params ={
        'AvrDelay' : 0, // Control FadeIn Delay
        'ObserveThreshold' : .1, // Observer Callback Interaction Threshold
        'AnimationDuration' : 1 // FadeIn Animation Duration 
    }

    
    const rightFadeIn = useScrollFadeIn('right',params.AnimationDuration,params.AvrDelay,params.ObserveThreshold);
    const downFadeIn = useScrollFadeIn('down',params.AnimationDuration,params.AvrDelay,params.ObserveThreshold);
    const downFadeInUnderline = useScrollFadeIn('down',params.AnimationDuration,params.AvrDelay,params.ObserveThreshold);

    const downFadeInDelayed = useScrollFadeIn('down',params.AnimationDuration,params.AvrDelay+.3,params.ObserveThreshold);
    const downFadeInDelayed2 = useScrollFadeIn('down',params.AnimationDuration,params.AvrDelay+.5,params.ObserveThreshold);
    const downFadeInDelayed3 = useScrollFadeIn('down',params.AnimationDuration,params.AvrDelay+.7,params.ObserveThreshold);
    const downFadeInDelayed4 = useScrollFadeIn('donw',params.AnimationDuration ,params.AvrDelay+ .9 , params.ObserveThreshold);

    const drawSecondFadeIn = useScrollFadeIn('right',params.AnimationDuration,.2,params.ObserveThreshold);
    const ImageSecondFadeIn = useScrollFadeIn('right',params.AnimationDuration,.2,params.ObserveThreshold);



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
                <img className="face" src={Face} style={onBoard ? {transform : `translateY(${scrollYoffset*0.2}px)`} : {transform : `translate3d(0,0,0)`}}/>
            </div>
            <header>
                    <h3 {...downFadeIn}>SoftWare Engineer, Jintaek Lim</h3>
                    <img className='highlight' src={underlineLime} {...downFadeInUnderline}></img>
                    <p {...downFadeInDelayed}>Based @Seoul, Korea</p>
                    <p {...downFadeInDelayed2}>Using JavaScript and Python ,C++</p>
                    <p {...downFadeInDelayed3}>Knowledge as Information Security and Programming</p>                
                    <p {...downFadeInDelayed4}>Intersting for Web Devlopment</p>
            </header>
            <section className="SecondPicture">
                <div className="image_second">
                    <img className="arrow" src={arrow}/>
                    <img className="face2" src={face2} {...ImageSecondFadeIn} />
                </div>
                <div className="Information">
                   <h1>Last Time in Travel</h1>
                    <span>Santiago de Chile Airport, 2020-02-10</span>
                </div>
            </section>
        </section>
    )
}