import React from "react"
import styled from "styled-components"
import Slider from "../slider/Slide"
import Viewer from "../viewers/Viewer"


const Layer = () =>{
    return(
        <Contaner>
            <Slider/>
            <Viewer/>
        </Contaner>
    )
}
export default Layer;

const Contaner = styled.div`
height :100%;
min-height:100vh;
width:100%;
position:relative;

:before {
    content:"";
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background-image:url("/Assets/images/home-background.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: -1;
}
`
