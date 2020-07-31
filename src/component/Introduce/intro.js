import React, { useEffect ,useState } from 'react';

export default function Intro(){
    const [offsetY ,setOffsetY] = useState(0);
    useEffect(()=>{
        const element = document.getElementById('wordScroll');
    
        const handleScrollY = () =>{
            setOffsetY(window.pageYOffset);
        }
        window.addEventListener('scroll',handleScrollY);
        return ()=>{
            window.removeEventListener('scroll',handleScrollY);
        }
    },[])

    return(
        <div id="Introduce" className="scroll-touch scorll-auto">
           <section className="header">
            <div style={{transform : `translateX(${offsetY}px)`}}>Background <span>#3a5ce9</span> Font <span>Roboto Mono</span> Hightlight <span>#DFFF00</span></div> 
            <div style={{transform : `translateX(${offsetY*2}px)`}}>SoftWare Engineer  <span>Major</span>  Information Security Engineering</div> 
            <div style={{transform : `translate3D(${offsetY*.5}px,0,10px)`}}>Base <span>@Seoul, Korea</span> Most Programming Site <span>Coffee Shop _☕_ </span></div> 
            <div>Language ! <span>English</span> && <span>JavaScript</span> && <span>Python</span> && <span>C/C++</span></div> 
            <div>Used Bundeler <span>WebPack</span>  FrameWork <span>React JS</span></div> 
            <div className="Info"></div>
           </section>

            <div className="Reactangle" style={{transform : `translate3d(${offsetY*2}px,${offsetY}px,3px)`}}></div>

        </div>
    )
}