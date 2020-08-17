import React from 'react';
export default function CustomButton(props){

    return(
        <section className="CustomButtonContainer">
    
            <a className={`${props.name} CustomButton`} href={props.targetUrl} target="_blank" style={{top : `${props.top}`, left : `${props.left}`}}>{props.name}</a>
        </section>  
    )
}