import React from 'react';
import Axios from 'axios';
import EXIF from 'exif-js';
export default function PictureInformation(target,setInformation){
    Axios.get(`http://localhost:3000/api/image/information?target=${target}`).then(
        response=>{
            const informations = response.data;
            const locationElement = document.getElementsByClassName('locationInfo')[0];
            const dateElement = document.getElementsByClassName('dateInfo')[0];
            locationElement.textContent = informations.location;
            dateElement.textContent = informations.date;
            setInformation(informations);
        }
    )
}