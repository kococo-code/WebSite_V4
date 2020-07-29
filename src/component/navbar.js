'use strict'
import React, {useState} from 'react';
function Navbar(){
    const [isOnClick, setIsOnClick] = useState(false);
    function handleOnClick(e){
        if(isOnClick === true){
            setIsOnClick(false);
        }else{
            setIsOnClick(true);
        }
        console.log(isOnClick);
    }

    let visibleStyle = {

    }


    return(
        <div id="Navbar"    >
            <div className="Hamburger" onClick={handleOnClick}>
                <div className="line"/>
                <div className="line"/>
                <div className="line"/>

            </div>
            <div className="Nav-list">
                <a href="#Home"><li>Home</li></a>
                <a href=""><li>Next</li></a>
                <a target="_blank" href="https://www.instagram.com/__jinnn.oyo__"><li>Instagram</li></a>

            </div>
           
        </div>

    )
}

export default Navbar;