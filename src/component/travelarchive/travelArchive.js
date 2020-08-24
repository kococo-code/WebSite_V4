import React , {useEffect,useState} from 'react';
import Arctic from '../../assets/image/Travel/Arctic1.jpg';
import Atacama from '../../assets/image/Travel/atacama.jpg';
import Himalaya from '../../assets/image/Travel/Himalaya.jpg';
import Uyuni from '../../assets/image/Travel/Uyuni.jpg';
import Irkutsk from '../../assets/image/Travel/Irkutsk.jpg';
export default function TravelArchive(){
    const [pastOffset , setPastOffset] = useState(0);
    const nameArray = ["Svalbard","Atacama"]
    const handleScroll = ()=>{
        setPastOffset(window.pageYOffset);
    }
    useEffect(()=>{
        window.addEventListener('scroll',handleScroll);
        return ()=>{
            window.removeEventListener('scroll',handleScroll);
        }
    })
    const fadeFunction  = () =>{
        // forEach Not Avaiable In IE
        const elements = document.getElementsByClassName("Citys")[0].querySelectorAll('li');
            for(let i=0; i<elements.length ; i++){
                elements[i].setAttribute('class','fadeOut');
            }
        let timer = () => setTimeout(()=>{     
            const elements = document.getElementsByClassName("Citys")[0].querySelectorAll('li');
            for(let i=0; i<elements.length ; i++){
                elements[i].textContent = nameArray[1];
            }
            for(let i=0; i<elements.length ; i++){
                elements[i].setAttribute('class','fadeIn');
            }
        },800);  
        timer();
        clearTimeout(timer);
    }

    return (
        <section id="TravelArchive">
            <section className="TravelHeader">
                <p>World Travel !</p>
                <p>33 Countries, 260 days</p>
            </section>
           <div className="PhotoWrapper Bolivia" >
                <div className="PhotoDate">2020/01/10, Uyuni Bolivia</div>
                <img src={Uyuni} width= {500} height ={500}></img>
                <h1>Be Advanture</h1> 
           </div>
           <div className="PhotoWrapper Arctic">
                <div className="PhotoDate">2017/08/01, Svalbard Norway</div>
                <img src={Arctic} width= {500} height ={500}></img>
                <h1>Svalbard Is.</h1> 
           </div>
           <div className="PhotoWrapper Nepal">
                <div className="PhotoDate">2019/01/21, Chommrong Nepal</div>
                <img src={Himalaya} width= {500} height ={500}></img>
                <h1>AnnaPruna</h1> 
           </div>
           <div className="PhotoWrapper Atacama">
                <div className="PhotoDate">2020/01/14, San pedro de Atacama, Chile</div>
                <img src={Atacama} width= {500} height ={500}></img>
                <h1 className="textAtacama">Atacama</h1>
           </div>
           <div className="PhotoWrapper Irkutsk">
                <div className="PhotoDate">2017/07/14, Irkutsk, Russia</div>
                <img src={Irkutsk} width= {500} height ={500}></img>
                <h1>Irkutsk, Russia</h1>
           </div>
        </section>


    )
}