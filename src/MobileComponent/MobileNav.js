import React from 'react';

export default function MobileNav(){

    function handleNavbarClick(e){        
        const MobileMain = document.getElementById('MobileMain');
        const navListElement = document.getElementsByClassName('Mobile_Nav-list')[0];
        const classNamesplits = navListElement.className.split(' ');
        const Hamburgerline = document.getElementsByClassName('line');
        const NavBackground = document.getElementById('NavBackground');

        if(classNamesplits[1] == 'hidden'){
            const lineDirection = ['down','hidden','up'];
            navListElement.setAttribute('class',`${classNamesplits[0]} visible`)
            Hamburgerline.forEach((key,value)=>{
                key.setAttribute('class',`line close ${lineDirection[value]}`);
            })
            NavBackground.setAttribute('class','visible')
        }else{

            navListElement.setAttribute('class',`${classNamesplits[0]} hidden`)
            Hamburgerline.forEach((key,value)=>{
                if(value === 0){
                    key.setAttribute('class','line first');
                }
                else{
                    key.setAttribute('class','line');

                }
            })
            NavBackground.setAttribute('class','hidden');

        }
    }



    return(
        <nav id="Mobile_Navbar">
            <div id="NavBackground" className="hidden"></div>
            <div className="Hamburger" onClick={handleNavbarClick}>
                <div className="line first" ></div>
                <div className="line"></div>
                <div className="line"></div>

            </div>
            <section className="Mobile_Nav-list hidden">
                <a href="#MobileMain" onClick={handleNavbarClick}>StartPage</a>
                <a href="#Mobile_Project" onClick={handleNavbarClick}>Project</a>
                <a href="#MobileMain" onClick={handleNavbarClick}>Contact</a>

            </section>
        </nav>

    )
}