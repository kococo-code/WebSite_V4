import React, { useEffect ,useState} from 'react';

export default function MobileTextTransition(){
    const [offsetY,setOffsetY] = useState(0);
    const flyWords = ['JavaScript','ReactJS','Flask','Python','Tensorflow','WorldTraveler','']
    function handleScroll(){
        setOffsetY(window.pageYOffset);
    }
    useEffect(()=>{
        window.addEventListener('scroll',handleScroll);
        return ()=>{
            window.removeEventListener('scroll',handleScroll);
        }
    },)
   

    return(
        <section id="Text_transition">
            <div className="dashed"></div>
            <div className="dashed cross"></div>
           

            <div className="Python">Using Python</div>
            <div className="JavaScript">Using JavaScript</div>
            <div className="FE">Front Engineer</div>

            <div className="aboutMe">
                <p><span>1994.06.08</span></p>
                <p><span>Major by Information Security</span></p>
                <p><span>33 Countries Traveled</span></p>
                <p><span>Service on Navy Force 2Y</span></p>
            </div>
        </section>
    )
}