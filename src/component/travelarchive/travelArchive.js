import React , {useEffect,useState} from 'react';
import RightPictureContainer from './PictureRight'
import CenterPictureContainer from './PictureCenter';
import LeftPictureContainer from './PictureLeft';
export default function TravelArchive(){
    const [mousePos,setMousePos] = useState({x:0,y:0});
    const [mouseDirection , setMouseDirection] = useState({x:0,y:0});
    const [pastPos , setPastPos] = useState({x:0,y:0});

    const params = {
        'X_MoveMentTick' : 15,
        'Y_MoveMentTick' :  10,
        'gradientDivideScale' : 15,
        'titleMovementScale' : .05,
        'biosMovementScale' : .1,
        'randomCodeIntervalIterateTime' : 15,
        'hasVisible' : false,
        'isWindows' : false,
        'minimumThreshold' : 1100
    }
    const central = {
        'y' :window.innerHeight /2,
        'x' : window.innerWidth /2
    }

    function handleMousePosition(e){
        if(window.pageYOffset < 2400 && params.isWindows === false){
            const x_gradient = (central.x - e.clientX)/params.gradientDivideScale;
            const y_gradient = (central.y - e.clientY)/params.gradientDivideScale;
            const x_Movement = (pastPos.x + x_gradient)*params.X_MoveMentTick;
            const y_Movement = (pastPos.y + y_gradient)*params.Y_MoveMentTick;
            setPastPos({x:x_Movement,y:y_Movement});
            setMousePos({x:x_Movement,y:y_Movement});     
        }
    }

    const isWindow = () =>{
        const userAgent = window.navigator.userAgent;
        const target = 'Trident';
        if(userAgent.slice(37,44) === target){
            params.isWindows = true
            document.getElementById('Archive').style.transform = 'scale(0.8)';
        }
       
    }
    useEffect(()=>{
        // Travel Archive Mouse Transform was Not good performance 
        // So I was Block Mouse behavior on handleMousePosition => parms.isWindows
        isWindow();

        window.addEventListener('mousemove',handleMousePosition);
        window.addEventListener('scroll',handleScroll);
        return ()=>{
            window.removeEventListener('mousemove',handleMousePosition);
            window.removeEventListener('scroll',handleScroll);
        }
    },[])

    function handleScroll(){ };
    function imgOnClick(e){
        // Image OnClick Function
        // randomCode is Make randomCode before render latlng , locationInformation

        const target = e.target.getAttribute('value');
        const charSet = '1234567890!@#$%^&*()QWERTYUIOPQASDFGHJKLZXCVBNM가나다라마바사아자차카타파하아야어요오요우유으이';
        const randomNum = (modIndex) => Math.ceil((Math.random() * 1000)) % (modIndex-1);
        const randomCodeGenerator = (codeLength) => {
            let result = '';
            for(let i =0 ; i< codeLength ; i++){
                result += charSet[randomNum(charSet.length)];
            }
            return result;
        }
        let i= 0;        
        if(target!=null){
            const location = target.split(' ')[0];
            const latlng = target.split(' ')[1].split('&');
            const locationElement = document.getElementById('Location');
            const latlngElement = document.getElementById('latlng');
            let randomCodeInterval = setInterval(()=>{
                locationElement.textContent = (randomCodeGenerator(i+2));
                latlngElement.textContent = randomCodeGenerator(i+2);
                i++;
                if(i===params.randomCodeIntervalIterateTime){
                    locationElement.textContent = location;
                    latlngElement.textContent = latlng[0] + ' ' + latlng[1]; 
                  
                    clearInterval(randomCodeInterval);
                }
            },90)
        }
    }

    return (
        
        <section id="TravelArchive" onClick={imgOnClick}>
            <div id="Archive">
                <LeftPictureContainer mousePos={mousePos} ContainerMovementScale={1} biosMovementScale={params.biosMovementScale}></LeftPictureContainer>
                <RightPictureContainer mousePos={mousePos} ContainerMovementScale={1.2} biosMovementScale={params.biosMovementScale}></RightPictureContainer>
                <CenterPictureContainer mousePos={mousePos} ContainerMovementScale={1.21} biosMovementScale={params.biosMovementScale} titleMovementScale={params.titleMovementScale}></CenterPictureContainer>
            </div>

        </section>


    )
}