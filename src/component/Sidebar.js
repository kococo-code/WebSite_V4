import React, {useState, useEffect} from 'react'; 
export default function SideBar() {
    const [currnetHeight , setHeight] = useState(0);

    useEffect(()=>{
        const getHeight = () =>{
            setHeight(window.pageYOffset);
        }
        window.addEventListener('scroll',getHeight);
        return ()=>{window.removeEventListener('scroll',getHeight)};
    },[]);
    
    useEffect(()=>{
        const element = document.getElementById('SideBar');

        if(currnetHeight > 500){
            element.setAttribute('class','sidebar_hidden');
        }else{
            element.setAttribute('class','');
        }
    },)
    return(
        <section id="SideBar">
            <span>Jin Taek Lim, @Seoul, Korea</span>
        </section>
    )
}