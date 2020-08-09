import React , {useEffect,useState} from 'react';
import Project from '../Project/project';


export default function Topbar(){
    const [pastHeight , setHeight] = useState(0);
    const [buttonDirection,setButtonDirection] = useState('down');
   
    useEffect(()=>{
        const getHeight = () =>{
            const currentHeight = window.pageYOffset;
            const element = document.getElementById('Topbar');
            if(currentHeight > 400){
                if(currentHeight > pastHeight){
                    element.setAttribute('class','topbar_hidden');
                }else{
                    element.setAttribute('class','');
                }    
            }
           
            setHeight(currentHeight);

        }
        window.addEventListener('scroll',getHeight);
        return ()=>{window.removeEventListener('scroll',getHeight)};
    },);
    function handleOnClick(e){
        if(buttonDirection=='down'){
            setButtonDirection('up');
            e.target.setAttribute('class','reverse');
            const projectElement = document.getElementById('ProjectArchive');
            const projectElementHeight = projectElement.getBoundingClientRect();

            window.scrollTo({
                top : projectElementHeight.top,
                behavior: 'auto'
            });
        }
        else{
            setButtonDirection('down');
            e.target.setAttribute('class','');
            window.scrollTo({
                top : 0,
                behavior: 'auto'
            });
        }
    }
    


    return(
        <nav id="Topbar">
            <section id="topbar_brand">
                <span className="topbar_brand_element">Kococo</span>
            </section>
            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" onClick={handleOnClick}><path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z"/></svg>
            <section className="nav-link">
                <a className="nav-element" href="/">Home</a>
                <a className="nav-element" href="#Project">Project</a>
            </section>

        </nav>
    )
}