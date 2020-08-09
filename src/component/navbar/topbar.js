import React , {useEffect,useState} from 'react';
import underline from '../../assets/image/underline2.png';

export default function Topbar(){
    const [pastHeight , setHeight] = useState(0);
    const [buttonDirection,setButtonDirection] = useState('down');
    const [tooltipOn , setTooltipOn] = useState('false');
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
            else if(currentHeight == 0){
                // Scroll is Top , Change Button Direction
                const btnElement = document.getElementsByClassName('scrollbtn')[0];
                btnElement.setAttribute('class','scrollbtn');
            }
           
            setHeight(currentHeight);

        }
        const mousePoshandler = (ev) =>{
            if(ev.screenY < 250){
                const element = document.getElementById('Topbar');
                element.setAttribute('class','');
            }
        }
        window.addEventListener('mousemove',mousePoshandler)
        window.addEventListener('scroll',getHeight);
        return ()=>{
            window.removeEventListener('scroll',getHeight)
            window.removeEventListener('mousemove',mousePoshandler);
        };
    },);
    function handleOnClick(e){
        if(buttonDirection=='down'){
            setButtonDirection('up');
            e.target.setAttribute('class','scrollbtn reverse');
            //const projectElement = document.getElementById('ProjectArchive');
            //const projectElementHeight = projectElement.getBoundingClientRect();
            //console.log(projectElementHeight);
            window.scrollTo({
                top : 4096,
                behavior: 'auto'
            });
        }
        else{
            setButtonDirection('down');
            e.target.setAttribute('class','scrollbtn');
            window.scrollTo({
                top : 0,
                behavior: 'auto'
            });
        }
        
    }
    


    return(
        <nav id="Topbar">
            <section className="topbar_brand">
                Kococo
                <img className="underline" src={underline} />
            </section>
            <svg className="scrollbtn" width="30" height="30" xmlns="http://www.w3.org/2000/svg" onClick={handleOnClick}>
                <path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z"/></svg>
            <section className="nav-link">
                <a className="nav-element" href="/">Home</a>
                <a className="nav-element" href="#Project">Project</a>
            </section>

        </nav>
    )
}
