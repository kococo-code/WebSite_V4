import React from 'react';

export default function setInformation(index,informations){
    const locationElement = document.getElementsByClassName('locationInfo')[0];
    const dateElement = document.getElementsByClassName('dateInfo')[0];
    locationElement.textContent = informations.location;
    dateElement.textContent = informations.date;
}