import React, {useState, useEffect} from 'react';
import flightMapImage from '../../assets/image/flight_map.jpg';

export default function Project(){
    const [scrollYoffset , setYoffset] = useState(0);

    useEffect(()=>{
        const handleYoffset = ()=>{
            if(window.pageYOffset > 970 && window.pageYOffset < 3000){
                setYoffset(window.pageYOffset-970);
            }else{
                //setYoffset(0);
            }
        }
        window.addEventListener('scroll',handleYoffset);
        return () => {
            window.removeEventListener('scroll' ,handleYoffset);
        }
    },[]);

    return(
        <section id="Project"  style={{transform : `translateY(${scrollYoffset}px)`}}>
              Here is Project
            <section className="Project_cards">
              
            </section>
       
        </section>
        
    )
}