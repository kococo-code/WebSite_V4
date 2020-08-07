import React from 'react';

export default function wordCreate(){
    function BackgroundWord(){
        const params = {
            'charset' : "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
            'rowCount' : 25,
            'columnCount' : 30,
            'randomIdxScale' : 1000,
            'ColorPallate' : ['red','green','yellow','purple','blue']
        }
        const getRandomNum = () => Math.ceil(Math.random() * params.randomIdxScale);
        const randomWord = (charset, wordLength) => {
            let word = '';
            for(let i = 0 ; i < wordLength ; i++){
                word += charset[(getRandomNum() % (charset.length-1))]
            }
            return word;
        }
        const colorPicker = () => params.ColorPallate[getRandomNum() % (params.ColorPallate.length-1)];

        const containerElement = document.getElementsByClassName('WordContainer')[0];

        for(let columnlevel = 0 ; columnlevel < params.columnCount ; columnlevel++){
            const columnElement = document.createElement('div');
            columnElement.setAttribute('class','wordColumn');
            for(let rowlevel = 0 ; rowlevel < params.rowCount ; rowlevel++){
                const word = randomWord(params.charset,2);
                const rowelement = document.createElement('div');
                const randomColor = colorPicker();
                rowelement.setAttribute('class',`word ${randomColor}`);
                if(columnlevel === 6 && rowlevel === 8){
                    rowelement.setAttribute('class','word one');
                    rowelement.textContent = '01';
                }
                else if(columnlevel === 14 && rowlevel === 15){
                    rowelement.setAttribute('class','word two');
                    rowelement.textContent = '02';
                }
                else{
                    rowelement.textContent = word;
                }
                columnElement.appendChild(rowelement);
            }
            containerElement.appendChild(columnElement);
        }
    }   
    return BackgroundWord()

}