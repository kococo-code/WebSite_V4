import styled from 'styled-components';
const Topbar = styled.nav`
    display : none;
    position : fixed;
    top : 0px;
    left : 5%;
    width : 90%;
    height : 80px;
    z-index: 80;
    font-family : 'Archivo Black' , sans-serif;
    font-size : 16px;
    background-color: #eee;
    color :black;
    border-bottom : 2px solid #485969;
    transition : all ease .5s;
    transform : translateY(${props=> props.visiblity ? 0 : -90}px);

`
const TopbarBrand = styled.div`
    position : absolute;
    width : 150px;
    top : 20px;
    left : 42%;
    font-family : 'Inter' , sans-serif;
    font-size : 30px;
    font-style : italic;
    cursor: pointer;
    transition: all .4s;
    color : #eee;
    line-height: 10px;
    text-shadow : -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    &:hover{
        transform : translateY(20px);
    }
`

const LoactionInfo = styled.div`
    position: absolute;
    top : 26px;
    left : 0px;
    font-family : 'open sans' ,sans-serif;
    font-weight : 400;
    font-style : italic;
    text-align: left;
    line-height: 8px;
    color : #485969;
`
export {
    Topbar,
    TopbarBrand,
    LoactionInfo
};

