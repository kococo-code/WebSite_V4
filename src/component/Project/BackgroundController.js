import React from 'react';

export default function BackgroundController(){
    function Controller(){
        const startTarget = document.getElementsByClassName('container')[0];
        const EndTarget = document.getElementsByClassName('threshold')[0];
        const endPoint = EndTarget.getBoundingClientRect().top;
        const hidePoint = startTarget.getBoundingClientRect().top;
        if(hidePoint > -1 || endPoint < 1000){
            const element = document.getElementsByClassName('WordContainer')[0];
            element.setAttribute('class', 'WordContainer normal');
            
        }else{
            const element = document.getElementsByClassName('WordContainer')[0];
            element.setAttribute('class', 'WordContainer fixed');            
        }
    }
    return Controller()
   
}