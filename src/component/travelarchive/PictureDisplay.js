import React from 'react';
import Axios from 'axios';
export default function AsyncPictureGet(target,setImage){
    Axios.get(`http://localhost:3000/api/image?target=${target}`,{ responseType:"blob" }).then(
        response=>{
            if(response.status === 200){
                if(response.data !== null){
                    const imageElement = document.getElementsByClassName('PhotoPlace')[0];
                    let reader = new window.FileReader();
                    reader.readAsDataURL(response.data); 
                    reader.onload = function() {
                        let imageDataUrl = reader.result;
                        imageElement.setAttribute("src", imageDataUrl);
                    }
                }
                            
            }
           
        }
    )
}