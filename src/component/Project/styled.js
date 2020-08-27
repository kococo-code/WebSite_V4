import styled from 'styled-components';
const WindowHeight = window.outerHeight;
const ProjectComponent = styled.section`
    position : absolute;
    display : inline;
    top : 100%;
    left : 0px;
    width : 100%;
    font-family : 'Roboto' , sans-serif;
    font-size : 16px;
    
`  

const ProjectSection = styled.section`
    position : relative;
    display : flex;
    flex-direction : row;
    height : ${WindowHeight}px;
    width : 100%;
    background : ${props => props.background};
    color : ${props => props.fontColor};
    cursor : pointer;
    overflow-x : scroll;
`
const ProjectName = styled.h1`
    position : absolute;
    top : 50px;
    left : 100px;
    max-width : 600px;
    padding-right : 5px;
    font-family : 'Inter' , sans-serif;
    font-size : ${props => props.fontSize}rem;
    font-style : italic;
    text-align : right;
    line-height : 16px;
`
const ProjectContents = styled.article`
    position : absolute;
    top : 350px;
    left : 100px;
    width : 80%;
    height : 500px;
    text-align : left;
    line-height : 1em;
    p{
        font-family : 'Roboto Mono' , monospace;
        font-size : 1.2em;
    }
    a{
        text-decoration : none;
        border-radius : 5px;
        padding : 2px 5px 2px 5px;
        color : black;
        background : white; 
    }
`
const Stacklists = styled.ul`
    position : absolute;
    top : 200px;
    right : 50px;
    display : inline;
    list-style : none;
    li{
        font-family : 'Roboto Mono' , monospace;
        border : 1px solid white;
        border-radius : 50px;
        padding : 10px;
        margin : 10px;
    }   
`
const MorePages = styled.article`
    width : 100%;
    height : ${WindowHeight}px;
    transform : translateX(${props=>(props.PagesNum*window.outerWidth)}px)
`


export {
    ProjectComponent,
    ProjectSection,
    ProjectName,
    ProjectContents,
    Stacklists,
    MorePages
}