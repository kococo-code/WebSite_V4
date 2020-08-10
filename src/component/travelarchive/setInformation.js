import React from 'react';
import EXIF from 'exif-js';
export default function setInformation(index,informations){
   
    const img = document.getElementsByClassName('PhotoPlace')[0];
    EXIF.getData(img, function() {
        let tags = EXIF.getAllTags(this, "Model");
        console.log(tags);
    })
}

