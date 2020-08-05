import React, { useEffect , useState } from 'react';
import Observe from '../util/DomObserve';
function WordRotate(){
    const [onBoard , setOnBoard] = useState(true);
    const columnCount = 20;
    const rowCount = 40;
    const letters = "12345678910!@#$%^&*()QWERTYUIOPASDFGHJKLZXCVBNM";
    const colorPalatte = ['#3a5ce9','#e6a32a','#dfff00','#123456','#ff9922','#123901','#ffaaee'];

    useEffect(()=>{
        const lettersLength = letters.length;
        const MultipleScale = 1000;
        const randomIdx = (ModulerScale) => Math.ceil((Math.random() * MultipleScale)% ModulerScale) -1;
        const randomTwoLetterWord = () => letters[randomIdx(lettersLength)] + letters[randomIdx(lettersLength)];
        const fieldElement = document.getElementsByClassName('field')[0];
        const colorPicker = () => colorPalatte[randomIdx(colorPalatte.length)];
        function setProperty(){
            for(let i= 0 ; i < columnCount ; i++){
                let column = document.createElement('div');
                if(i%3===0){
                    column.setAttribute('class' ,'wordrow reverse');

                }else if(i%3===1){
                    column.setAttribute('class' ,'wordrow reverse_two');
                }else{
                    column.setAttribute('class', 'wordrow');
                }

                for(let j = 0 ; j < rowCount ; j++){
                    let row = document.createElement('li');
                    row.textContent = randomTwoLetterWord();
                    column.appendChild(row);
                }
                fieldElement.appendChild(column);
            }
        }
        setProperty();
    },)


    return(
        <section id="WordRotate" {...Observe(setOnBoard)}>
            <section className="field"></section>
            
        </section>
    )


}
export default WordRotate;