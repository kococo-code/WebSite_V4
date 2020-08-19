import React from 'react';
import Arctic from '../../assets/image/Travel/Arctic1.jpg';
import Huacachina from '../../assets/image/Travel/Huacachina.jpg';
import Atacama from '../../assets/image/Travel/atacama.jpg';
export default function RightPictureContainer(props){
    const mousePos = props.mousePos;
    const biosMovementScale = props.biosMovementScale;
    const ContainerMovementScale = props.ContainerMovementScale;
    return(
        <section id="PictureRight" will-change="transform" style={{transform:`translate3d(${mousePos.x*ContainerMovementScale}px,${mousePos.y*ContainerMovementScale}px,0px)`}}>
        <div className="Memories arctic">
                <a href="https://www.instagram.com/p/BXGImyxnb6B2u-Cb7Se9MUKVzu7de46ORp0I8Y0/" target="_blank"><img src={Arctic} width={320} height={320} value="Svalbard_Is. N78.36&E18.19"></img></a>
                <div className="bios arcticBios" style={{transform:`translate3d(${mousePos.x * biosMovementScale}px,${mousePos.y * biosMovementScale}px,0)`}}>
                    <p><span>N78.36 E18.19</span></p>
                    <p>Svalbard Is. 2017/08/01</p>
                    After Siberia Train, I was meet Polar Bear in Arctic
                </div>
        </div>
        <div className="Memories HuachaChina">
                <a href="https://www.instagram.com/p/B-4lWEGjPYmT1Y3odibxnIwYGTczodsl8oE2PI0/" target="_blank"><img src={Huacachina} width={320} height={320} value="HuachaChina_Desert S14.08&W75.76"></img></a>
                <div className="bios HuachaChinaBio" style={{transform:`translate3d(${mousePos.x * biosMovementScale}px,${mousePos.y * biosMovementScale}px,0)`}}>
                    <p><span>S14.08 W75.76</span></p>
                    <p>HuacaChina Desert, Peru 2019/12/28</p>
                    Did you have a sleep in the Desert? Stargazing is Awesome!
                </div>
        </div>
        <div className="Memories Atacama">
                <a href="https://www.instagram.com/p/B7Wug0RgAyapqau2ICLUDyTPXCL7Ea2wRAfRj80/" target="_blank"><img src={Atacama} width={400} height={400} value="Atacama_Desert S23.86&W69.14"></img></a>
                <div className="bios AtacamaBio" style={{transform:`translate3d(${mousePos.x * biosMovementScale}px,${mousePos.y * biosMovementScale}px,0)`}}>
                    <p><span>S23.86 W69.14</span></p>
                    <p>Atacama Desert, Chile 2020/01/16</p>
                </div>
        </div>
        </section>
    )
}