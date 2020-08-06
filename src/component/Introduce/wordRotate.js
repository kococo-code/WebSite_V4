import React, { useEffect , useState } from 'react';
import Observe from '../util/DomObserve';
import Uyuni from '../../assets/image/Uyuni.jpeg';
import HanoiNoibai from '../../assets/image/HanoiNoibai.jpeg';
function WordRotate(){

    const [onBoard , setOnBoard] = useState(false);
    const [scrollYoffset , setYoffset] = useState(0);
    const [complete,setComplete]  = useState([0]);
    
    useEffect(()=>{
        const target = document.getElementById('TravelArchive');
        const targetHeight = target.getBoundingClientRect().top;
        const handleYoffset = ()=>{
            if(window.pageYOffset > targetHeight &&  window.pageYOffset < 5000){
               setYoffset(window.pageYOffset-targetHeight);
            }else if(window.pageYOffset < targetHeight){
               setYoffset(0);
            }else{
                setYoffset(0);
            }
        }
        window.addEventListener('scroll',handleYoffset);
        return () => {
            window.removeEventListener('scroll' ,handleYoffset);
        }
    },[]);

    useEffect(()=>{ 
        const elementHeight = document.getElementsByClassName('three')[0];
        const threeHeight = elementHeight.getBoundingClientRect().top;
        console.log(threeHeight);

        if(threeHeight < 30 && complete[0] === 0){
            const CounterElement = document.getElementsByClassName('Counter')[0];
            const nextNumber = document.createElement('div');
            nextNumber.textContent = '02';
            nextNumber.setAttribute('class','next');
            CounterElement.appendChild(nextNumber);

            let tmpComplete = complete;
            tmpComplete[0] = 1;
            tmpComplete.push = 0;
            setComplete(tmpComplete);
        }   

    });
    return(
        <section id="TravelArchive">
            <section className="container">
                <div className="Counter" style={onBoard ?  {position : "absolute", top : "0px"} : {position : "fixed" ,top : `${100}px`,left : "100px"}}>
                    <div className="prev">01</div>
                    </div>
                    <article className="PictureContainer">
                        <div className="PictureInfo">
                            <strong>Uyuni Bolivia</strong>
                            </div>
                        <img src={Uyuni} width="600" height="400"></img>
                    </article>
                    <article className="three">
                        </article>

                    <article className="Two" {...Observe(setOnBoard,0.01)} >
                    </article>                    
            </section>

        </section>
    )


}
export default WordRotate;