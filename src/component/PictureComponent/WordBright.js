
export default function BrightWord(){
    function target(){
        const targets = ['first','second'];
        const wordTargets = ['one','two'];
        const startThreshold = [500,1000];
        const FinishThreshold = [-130,-300];
        targets.forEach((key,value)=>{
            const PictureElement = document.getElementsByClassName(key)[0];
            const posElement = PictureElement.getBoundingClientRect().top;
            if(posElement < startThreshold[value] && posElement > FinishThreshold[value]){
                const wordElement = document.getElementsByClassName(wordTargets[value])[0];
                wordElement.setAttribute('class',`word ${wordTargets[value]} bright`);
            }else{
                const wordElement = document.getElementsByClassName(wordTargets[value])[0];
                wordElement.setAttribute('class',`word ${wordTargets[value]}`);
            }     
        })
    }
    return target();
}