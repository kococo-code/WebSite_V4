import React, { useEffect , useState } from 'react';
import Observe from '../util/DomObserve';
function WordRotate(){
    const [onBoard , setOnBoard] = useState(true);
    const [scrollYoffset , setYoffset] = useState(0);
    const columnCount = 20;
    const rowCount = 25;
    const charset = "12345678910!@#$%^&*()QWERTYUIOPASDFGHJKLZXCVBNM";
    const charset_ = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const colorPalatte = ['#3a5ce9','#e6a32a','#dfff00','#123456','#ff9922','#123901','#ffaaee'];

 
    useEffect(()=>{
        const target = document.getElementById('WordRotate');
        const targetHeight = target.getBoundingClientRect().top;

        const handleYoffset = ()=>{
            if(window.pageYOffset > targetHeight &&  window.pageYOffset < 4000){
                setYoffset(window.pageYOffset-targetHeight);
            }else if(window.pageYOffset < targetHeight){
                setYoffset(0);
            }
        }
        window.addEventListener('scroll',handleYoffset);
        return () => {
            window.removeEventListener('scroll' ,handleYoffset);
        }
    },[]);


    useEffect(()=>{
        const charsetLength = charset.length;
        const MultipleScale = 1000;
        // Random Integer for ArraySet
        const randomIdx = (ModulerScale) => Math.ceil((Math.random() * MultipleScale)% ModulerScale) -1; 

        // Get Two Letter Random Code
        const randomTwoLetterWord = () => charset[randomIdx(charsetLength)] + charset[randomIdx(charsetLength)];

        // Get Three Letter Random Code
        const randomThreeLetterWord = () => charset[randomIdx(charsetLength)] + charset[randomIdx(charsetLength)] + charset[randomIdx(charsetLength)]; 

        const randomWordElement = document.getElementsByClassName('randomWord')[0];
        const colorPicker = () => colorPalatte[randomIdx(colorPalatte.length)];
        function setProperty(){
            for(let i= 0 ; i < columnCount ; i++){
                let column = document.createElement('div');
                column.setAttribute('class' ,'wordrow reverse');
                      
                for(let j = 0 ; j < rowCount ; j++){
                    let row = document.createElement('li');
                    row.textContent = randomTwoLetterWord();
                    row.textContent = randomThreeLetterWord();
                    column.appendChild(row);
                }
                randomWordElement.appendChild(column);
            }
        }
        setProperty();
    },[])

   

    return(
        <section id="WordRotate" style={{transform : `translate3d(0,${scrollYoffset}px,0)`}} {...Observe(setOnBoard,0.01)}>
            <section className="container">
                <section className="randomWord"/>
                <section>
                    <span>Hello! </span>
                </section>
            </section>
            
        </section>
    )


}
export default WordRotate;