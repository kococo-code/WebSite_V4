import React, {useState, useEffect} from 'react'; 
export default function SideBar() {
    const [pastHeight , setHeight] = useState(0);

    useEffect(()=>{
        const getHeight = () =>{
            const currentHeight = window.pageYOffset;
            const element = document.getElementById('SideBar');

            if(currentHeight > pastHeight){
                element.setAttribute('class','sidebar_hidden');
            }else{
                element.setAttribute('class','');
            }
            setHeight(currentHeight);

        }
        window.addEventListener('scroll',getHeight);
        return ()=>{window.removeEventListener('scroll',getHeight)};
    },);
    
    
    return(
        <section id="SideBar">
            <span>Jin Taek Lim, @Seoul, Korea, SoftWare Engineer Rookie</span>
        </section>
    )
}