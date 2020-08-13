import React from 'react';
import Siberia from '../../assets/image/Travel/Siberia.jpg';
import Udaipur from '../../assets/image/Travel/Udaipur.jpg';
import Irkutsk from '../../assets/image/Travel/Irkutsk.jpg';
import Circle from '../../assets/image/circle2.png';
export default function CenterPictureContainer(props){
    const mousePos = props.mousePos;
    const biosMovementScale = props.biosMovementScale;
    const titleMovementScale = props.titleMovementScale;
    const ContainerMovementScale = props.ContainerMovementScale;
    return (
        <section id="PictureCenter" will-change="transform" style={{transform:`translate3d(${mousePos.x*ContainerMovementScale}px,${mousePos.y*ContainerMovementScale}px,0px)`}}>
                <div className="intro" will-change="transform">
                    <p style={{transform:`translate3d(${mousePos.x*titleMovementScale}px,${mousePos.y*titleMovementScale}px,0px)`}}>
                        260days of Memories
                    </p>
                    <img src={Circle} className="Circle"></img>
                    <p id="Location"></p>
                    <p id="latlng"></p>
                </div>
                <div className="Memories Siberia">
                        <img src={Siberia} width={337} height={450} value="Moscow,Russia N55.77&E37.65"></img>
                        <div className="bios SiberiaBios" style={{transform:`translate3d(${mousePos.x * biosMovementScale}px,${mousePos.y * biosMovementScale}px,0)`}}>
                            <p><span>N55.77 E37.65</span></p>
                            <p>Moscow, Russia 2017/07/20</p>
                            6days 17 hours cross the Siberia, Just Survive Train. and I was meet 20 peoples from North Korea.
                        </div>
                </div>
                <div className="Memories Jodhpur">
                        <img src={Udaipur} width={400} height={400} value="Jodhpur,India N26.27&E72.96"></img>
                        <div className="bios JodhpurBio" style={{transform:`translate3d(${mousePos.x * biosMovementScale}px,${mousePos.y * biosMovementScale}px,0)`}}>
                            <p><span>N26.27 E72.96</span></p>
                            <p>Jodhpur, India 2019/01/16</p>
                        </div>
                </div>
                <div className="Memories Irkutsk">
                        <img src={Irkutsk} width={400} height={400} value="Irkutsk,Russia N26.27&E72.96"></img>
                        <div className="bios IrkutskBio" style={{transform:`translate3d(${mousePos.x * biosMovementScale}px,${mousePos.y * biosMovementScale}px,0)`}}>
                            <p><span>N51.78 E103.45</span></p>
                            <p>Irkutsk, Russia 2017/07/16</p>
                        </div>
                </div>
        </section>
    )
}