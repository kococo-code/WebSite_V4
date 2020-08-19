import React, {useRef, useEffect} from 'react';

/*
    Observe is element visible Observer 
    => https://developer.mozilla.org/ko/docs/Web/API/Intersection_Observer_API
    But under ie 11 is not Support, So Not Used
*/

const Observe = (setOnBoard, threshold=0.1) => {
    const dom = useRef();
    const callback = (entries , observer)=>{
        entries.forEach((entry)=>{
            if (entry.isIntersecting){
                setOnBoard(1);
            }
            else{
                setOnBoard(0);
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