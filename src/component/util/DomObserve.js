import React, {useRef, useEffect} from 'react';

const Observe = (setOnBoard, threshold=0.1) => {
    const dom = useRef();
    const callback = (entries , observer)=>{
        entries.forEach((entry)=>{
            if (entry.isIntersecting){
                setOnBoard(1);
                console.log('Show')
            }
            else{
                setOnBoard(0);
                console.log('None');    
            }
        })
    }

    useEffect(()=>{
        let observer;
        const { current } = dom;
        if (current){
            observer = new IntersectionObserver(callback,{threshold : threshold})
            observer.observe(current);
        }

        return () => observer && observer.disconnect();

    },[dom])
    
    return {
        ref: dom,
    }

}

export default Observe;