import React ,{useEffect,useState} from 'react';
import MobileNav from './MobileNav';
import MobileProject from './MobileProject';
import MobileWhoamI from './MobileWhoamI';
import Face from '../assets/image/face3.jpg';
export default function MobileMain(){
    return (
        <div id="MobileMain">
            <MobileNav></MobileNav>
            <div id="Mobile_Header">
                <p className="wording">Hi! , I'm JinTaek Lim!</p>
                <p className="wording">SoftWare Engineer</p>
            </div>
            <a target="_blank" href="https://instagram.com/__jinnn.oto__"><img id="Face" src={Face}></img></a>
            <p className="wording">It`s Me!</p>

            <MobileWhoamI></MobileWhoamI>
            <MobileProject></MobileProject>
        </div>
    )
}