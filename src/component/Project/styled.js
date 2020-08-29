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
    transition : transform 1.8s ease;
    transform : translateY(${props=> props.translateY}px);
`  

const ProjectSection = styled.section`
    position : relative;
    display : flex;
    flex-direction : row;
    height : ${WindowHeight}px;
    width : 100%;
    background : ${props => props.background};
    color : ${props => props.fontColor};
    border-bottom : 1px solid white;
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
    line-height : 1rem;
    span{
        box-shadow : inset 0px -20px #3a5ce9;
        transition : all .4s;
    }
    & span:hover{
        box-shadow : inset 0px -50px #555555;

    }
`
const ProjectContents = styled.article`
    position : absolute;
    top : 400px;
    left : 100px;
    width : 80%;
    height : 500px;
    text-align : left;
    line-height : 1.5rem;
    p{
        font-family : 'Roboto' ,"Noto Sans KR","Noto Sans TC" , sans-serif;
        font-style : italic;
        font-size : 1.2em;
    }
    a{
        text-decoration : none;
        border-radius : 5px;
        padding : 2px 5px 2px 5px;
        color : black;
        background : white; 
        transition : all .4s;
    }
    a:hover{
        background : #3a5ce9;
        color : white;
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
        transition : all .4s;
    }   
    li:hover{
        background : #3a5ce9;
        color : white;
        border : 1px solid transparent;
    }
`
const MorePages = styled.article`
    width : 100%;
    height : ${WindowHeight}px;
    transform : translateX(${props=>(props.PagesNum*window.outerWidth)}px)
`
const ProjectImage = styled.article`
    position : absolute;
    top : 500px;
    right : 400px;
    width : ${props=>props.width}px;
    height : ${props=>props.height}px;
    border-radius : 5px;
`

export {
    ProjectComponent,
    ProjectSection,
    ProjectName,
    ProjectContents,
    Stacklists,
    ProjectImage
}