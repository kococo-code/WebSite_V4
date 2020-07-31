'use strict'
import React, {useState, useEffect} from 'react';
function Navbar(){ 
    const [isOnClicked , setIsonClicked] = useState(false);
    function handleonClick(){
        if(isOnClicked===true){
            setIsonClicked(false);
        }else{

            setIsonClicked(true);
        }
    }
    useEffect(()=>{
        const NavListelement = document.getElementsByClassName("Nav-list")[0];
        const HamburgerElement = document.getElementsByClassName("Hamburger")[0];
        const navBarElement = document.getElementById('Navbar');
        const line1 = document.getElementsByClassName('line1')[0];
        const line2 = document.getElementsByClassName('line2')[0];
        const line3 = document.getElementsByClassName('line3')[0];

        if(isOnClicked===true){
            navBarElement.style.width = "50%";
            NavListelement.style.width = '100%';
            NavListelement.style.height = '100%';
            NavListelement.style.visibility = 'visible';
            HamburgerElement.style.zIndex = '99';
            line1.style.transform = "translate3d(-1px,2px,0) rotate(-45deg)";
            line2.style.opacity = '0';
            line3.style.transform = "translate3d(-1px,-12px,0) rotate(45deg)";

        }else{
            navBarElement.style.width = "120px";
            NavListelement.style.width = '0px';
            NavListelement.style.height = '0px';
            NavListelement.style.visibility = 'hidden';
            HamburgerElement.style.zIndex = '99';
            line2.style.opacity = '1';
            line1.style.transform = "translate3d(0px,0px,0) rotate(0deg)";
            line3.style.transform = "translate3d(0px,0px,0) rotate(0deg)";
        }
    })


    return(
        <div id="Navbar" className="">
            <div className="Hamburger" onClick={handleonClick}>
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line3"></div>
            </div>
            <div className="Nav-list">
                <div className="Main"><a href="#Introduce">94rising.xyz</a></div>
                <div className="Nav-link">
                    <a href="#Project"><li>Project</li></a>
                    <a target="_blank" href="https://github.com/kococo-code"><li>Github</li></a>
                    <a target="_blank" href="https://www.instagram.com/__jinnn.oto__"><li>Instagram</li></a>
                </div>
            </div>
        </div>

    )
}

export default Navbar;