import React , {useEffect,useState} from 'react';
import RightPictureContainer from './PictureRight'
import CenterPictureContainer from './PictureCenter';
import LeftPictureContainer from './PictureLeft';
export default function TravelArchive(){
    const [mousePos,setMousePos] = useState({x:0,y:0});
    const [mouseDirection , setMouseDirection] = useState({x:0,y:0});
    const [pastPos , setPastPos] = useState({x:0,y:0});
    const params = {
        'X_MoveMentTick' : 20,
        'Y_MoveMentTick' : 20,
        'gradientDivideScale' : 100,
        'titleMovementScale' : .05,
        'biosMovementScale' : .1,
        'randomCodeIntervalIterateTime' : 15,
        'hasVisible' : false
    }
    const central = {
        'y' :window.innerHeight /2,
        'x' : window.innerWidth /2
    }
    if(window.navigator.appVersion.indexOf('Apple')!==-1){
        params.X_MoveMentTick = 140
        params.Y_MoveMentTick = 50
    }

    function handleMousePosition(e){
        if(window.pageYOffset>0 && window.pageYOffset < 2400){
            
            const x_gradient = (central.x - e.clientX)/params.gradientDivideScale;
            const y_gradient = (central.y - e.clientY)/params.gradientDivideScale;
            const x_Movement = (pastPos.x + x_gradient)*params.X_MoveMentTick;
            const y_Movement = (pastPos.y + y_gradient)*params.Y_MoveMentTick;
            //setMouseDirection({x:x_gradient,y:y_gradient});
            //setPastPos({x:x_Movement,y:y_Movement});
            //setMousePos({x:x_Movement,y:y_Movement});
            
            
        }
    }
    function bioAnimationHandler(){
        const bios = document.getElementsByClassName('bios');
        bios.forEach((key)=>{
            key.style.transform = `translate3d(${mousePos.x * params.biosMovementScale}px,${mousePos.y * params.biosMovementScale}px,0)`;
        })
    }
    function fadeIn(){
        const bios = document.getElementsByClassName('bios');
        if(window.pageYOffset > 650){
            if(bios.length >= 1){
                bios.forEach((key,value)=>{
                    key.setAttribute('class','bios fadeIn');
                })
            }
        }else{
            if(bios.length >= 1){
                bios.forEach((key,value)=>{
                    key.setAttribute('class','bios');
                })
            }
        }
    }
    function handleScroll(){
        if(window.pageYOffset > 800 && params.hasVisible == false){
            const memoriesElements = document.getElementsByClassName('Memories');
            memoriesElements.forEach((element,value)=>{
                const elementClassName= element.className; 
                element.setAttribute('class',`${elementClassName} visibleDelay${value%2}`);
            })
            params.hasVisible = true;
        }
    }
    useEffect(()=>{
        window.addEventListener('mousemove',handleMousePosition);
        window.addEventListener('scroll',handleScroll);
        return ()=>{
            window.removeEventListener('mousemove',handleMousePosition);
            window.removeEventListener('scroll',handleScroll);

        }
    },[])
    

    useEffect(()=>{
    },[]);
    
    function onClick(e){
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
        
        <section id="TravelArchive" onClick={onClick}>
            <LeftPictureContainer mousePos={mousePos} ContainerMovementScale={1} biosMovementScale={params.biosMovementScale}></LeftPictureContainer>
            <RightPictureContainer mousePos={mousePos} ContainerMovementScale={1} biosMovementScale={params.biosMovementScale}></RightPictureContainer>
            <CenterPictureContainer mousePos={mousePos} ContainerMovementScale={1} biosMovementScale={params.biosMovementScale} titleMovementScale={params.titleMovementScale}></CenterPictureContainer>


        </section>


    )
}