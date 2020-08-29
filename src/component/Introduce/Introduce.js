import React, { useState, useEffect } from 'react';
import Face from '../../assets/image/face3.jpg';
export default function Introduce(){
    return(
        <section id="Introduce">
            <header>
                    <h3>SoftWare Engineer, <span>Jintaek Lim</span></h3>
                    <p>Based @Seoul, Korea</p>
                    <p>Using JavaScript and Python ,C++</p>
                    <p>Knowledge as Information Security and Programming</p>                
                    <p>Intersting for Interactive Develop</p>
            </header>
            <div>
                <img id="face" src={Face} />
            </div>            
        </section>
    )
}