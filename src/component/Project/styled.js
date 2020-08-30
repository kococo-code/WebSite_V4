import styled from 'styled-components';
const WindowHeight = window.outerHeight;
const WindowWidth = window.outerWidth;
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
    width : ${WindowWidth}px;
    background : ${props => props.background};
    color : ${props => props.fontColor};
    border-bottom : 1px solid white;
    transition : transform .5s;
    transform : translateX(${props=>props.pages*-WindowWidth}px);
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
        box-shadow : inset 0px -50px #3a5ce9;

    }
`
const ProjectContents = styled.article`
    position : absolute;
    top : 400px;
    left : 100px;
    width : 900px;
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
        padding : 1px 5px 1px 5px;
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
// Extra Pages => horizontal 
const MorePages = styled.article`
    width : 100%;
    height : ${WindowHeight}px;
    transform : translateX(${props=>(props.PagesNum*window.outerWidth)}px);
    background : black;
`
// Project Image
const ProjectImage = styled.article`
    position : absolute;
    top : 500px;
    right : 400px;
    width : ${props=>props.width}px;
    height : ${props=>props.height}px;
    border-radius : 5px;
`
// Demo , Github Link Button
const Button = styled.a`
    position : absolute;
    bottom : ${props=>props.bottom}px;
    left : ${props=>props.left}px;
    border : 1px solid white;
    border-radius : 5px;
    text-decoration : none;
    background : white;
    color : black;
    padding : 5px 15px 5px 15px;
    transition : all .4s;
    &:hover{
        background : black;
        color : white; 
        border ; 1px solid white;
    }
`
const NextButton = styled.div`
    position : absolute;
    bottom : 100px;
    right : 70px;
    cursor : pointer;
    &:before{
        content : 'next page';
        position : absolute;
        bottom : 0px;
        right : 30px;
        color : rgba(244,244,244,.5);
        white-space : pre;
    }
    &:after{
        content : '>';
        position : absolute;
        bottom : 10px;
        right : 30px;
        font-family : 'Open sans' , sans-serif;
        font-weight : 100;
        font-size : 100px;
        color : rgba(244,244,244,.5);
    }
`
const PrevButton = styled.div`
    position : absolute;
    bottom : 100px;
    left : 120px;
    cursor : pointer;
    &:before{
        content : 'prev page';
        position : absolute;
        bottom : 0px;
        right : 30px;
        color : rgba(244,244,244,.5);
        white-space : pre;
    }
    &:after{
        content : '<';
        position : absolute;
        bottom : 10px;
        right : 30px;
        font-family : 'Open sans' , sans-serif;
        font-weight : 100;
        font-size : 100px;
        color : rgba(244,244,244,.5);
    }
`
export {
    ProjectComponent,
    ProjectSection,
    ProjectName,
    ProjectContents,
    Stacklists,
    ProjectImage,
    Button,
    PrevButton,
    NextButton,
    MorePages
}