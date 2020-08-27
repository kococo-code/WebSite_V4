import React from 'react';
import styled from 'styled-components';

export default function Button(props){
    const Button = styled.a`
        position : absolute;
        top : ${props=>props.top}px;
        left : ${props=>props.left}px;
        padding : 5px 15px 5px 15px;
        margin  : 5px;
        border : 1px solid white;
        border-radius : 20px;
        text-decoration : none;
        color : white;
        font-size : 1.5em;
        transition : all .5s;
        &:hover{
            background : white;
            color : black;
        }
    `
    return(
        <Button top={props.top} left={props.left} href={props.href} target={props.target}>
        {props.text}
        </Button>
    )
}