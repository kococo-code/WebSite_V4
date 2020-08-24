import React , {useEffect,useState} from 'react';

export default function Topbar(){
    const [brandName , setBrandName] = useState('Kococo');
    const [buttonDirection,setButtonDirection] = useState('down');
    function getHeight(){
        
        const currentHeight = window.pageYOffset;

        // On Display
        if(currentHeight < 400){
            const element = document.getElementById('Topbar');
            element.setAttribute('class','');
        }

        // Chnage BUtton Direction
        else if(currentHeight === 0){
            // Scroll is Top , Change Button Direction
            const btnElement = document.getElementsByClassName('scrollbtn')[0];
            btnElement.setAttribute('class','scrollbtn');
        }
        
        // TopBar Brand Changer
        brandChanger();
        
    }
    
    function mousePoshandler(ev){
        const currentHeight = window.pageYOffset;
        if(currentHeight > 400){
            if(ev.screenY < 150){
                const element = document.getElementById('Topbar');
                element.setAttribute('class','');
            }
            else{
                const element = document.getElementById('Topbar');
                element.setAttribute('class','topbar_hidden');
            }
        }
        
    }
    function handleOnClick(e){
        if(buttonDirection=='down'){
            setButtonDirection('up');
            e.target.setAttribute('class','scrollbtn reverse');
            // Projects
            window.scrollTo({
                top : 3400,
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
    function brandChanger(){
        if(window.pageYOffset > 3300){
            setBrandName('Project');
        }else if(window.pageYOffset < 3300 && window.pageYOffset > 1000){
            setBrandName('Travel'); 
        }else{
            setBrandName('Kococo');
        }
    }
    useEffect(()=>{
        window.addEventListener('mousemove',mousePoshandler)
        window.addEventListener('scroll',getHeight);
        return ()=>{
            window.removeEventListener('scroll',getHeight)
            window.removeEventListener('mousemove',mousePoshandler);
        };
    },[]);
 
   
    


    return(
        <nav id="Topbar">
            <section className="topbar_brand">
                <div>{brandName}</div>
                <div style={{color : '#DFFF00'}}>{brandName}</div>
                <div>{brandName}</div>

            </section>
            <svg className="scrollbtn" width="30" height="30" xmlns="http://www.w3.org/2000/svg" onClick={handleOnClick}>
                <path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z"/>
            </svg>
            <section className="nav-link">
                <a className="nav-element" href="/">Home</a>
                <a className="nav-element" href="#Project">Project</a>
            </section>
            <div className="location">
                <p>서울특별시 영등포구</p>
                <p>37.50,126.91 2020/08/21 modified</p>
            </div>
        </nav>
    )
}
