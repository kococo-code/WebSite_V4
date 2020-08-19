import React from 'react';
import Himalaya from '../../assets/image/Travel/Himalaya.jpg';
import Uyuni from '../../assets/image/Travel/Uyuni.jpg';
export default function LeftPictureContainer(props){
    const mousePos = props.mousePos;
    const biosMovementScale = props.biosMovementScale;
    const ContainerMovementScale = props.ContainerMovementScale;
    return(
        <section id="PictureLeft" will-change="transform" style={{transform:`translate3d(${mousePos.x*ContainerMovementScale}px,${mousePos.y*ContainerMovementScale}px,0px)`}}>
            <div className="Memories Himalaya">
                <a href="https://www.instagram.com/p/BtBCT6fg2We0nw34meCGANM7hIgxvVSYvPw2300/" target="_blank"><img src={Himalaya} width={400} height={400} value="AnnaPruna,Nepal N28.35&E83.48"></img></a>
                <div className="bios HimalayaBios" style={{transform:`translate3d(${mousePos.x * biosMovementScale}px,${mousePos.y * biosMovementScale}px,0)`}}>
                    <p><span>N28.35 E83.48</span></p>
                    <p>AnnaPruna,Nepal 2019/01/19</p>
                    Escape from Avalanche in AnnaPruna.
                </div>
            </div>
            <div className="Memories Uyuni">
                <a href="https://www.instagram.com/p/B7PG54FA_lSG2aOop7aOl4cy8T_afEOh18rpvs0/" target="_blank"><img src={Uyuni} width={400} height={400} value="Uyuni,Bolivia S20.69&W67.20"></img></a>
                <div className="bios UyuniBios" style={{transform:`translate3d(${mousePos.x * biosMovementScale}px,${mousePos.y * biosMovementScale}px,0)`}}>
                    <p><span>S20.69 W67.20</span></p>
                    <p>Uyuni Salt Flat,Bolivia 2020/01/13</p>
                    Sky reflect on the ground. Never seen before this wonder.
                </div>
            </div>
        </section>
    )
}