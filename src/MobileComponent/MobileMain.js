import React ,{useEffect,useState} from 'react';
import MobileNav from './MobileNav';
import MobileProject from './MobileProject';

export default function MobileMain(){

    const [pageYoffset , setPageYoffset] = useState(0);

    // Scroll Event Listener
    function handleScrollHeight(){
        setPageYoffset(window.pageYOffset);
    }  
    useEffect(()=>{
        window.addEventListener('scroll',handleScrollHeight);
        return ()=>{
            window.removeEventListener('scroll',handleScrollHeight);
        }
    },[]);    


    return (
        <div id="MobileMain">
            <MobileNav></MobileNav>
            <div id="Mobile_Header">
                <p className="wording" style={{transform : `translateY(${pageYoffset}px)`}}>Hi! , I'm JinTaek Lim..</p>
                <p className="wording">SoftWare Engineer</p>
            </div>
            <MobileProject></MobileProject>
        </div>
    )
}