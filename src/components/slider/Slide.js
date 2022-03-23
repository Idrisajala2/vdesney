import  React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styled
 from "styled-components"





const Slide = () => {
  const settings = {
    dots:true,
    infinite:true,
    speed:500,
    slidesToShow:1,
    slidesToScoll:1,
    autoplay:true

  }
  return (
    <div>
      <Carousel {...settings}>
        <Wrap>
          <a href="#">
            <img src="/Assets/images/slider-badag.jpg" alt=""/>
          </a>
        </Wrap>
        <Wrap>
          <a href="#">
            <img src="/Assets/images/slider-badag.jpg" alt=""/>
          </a>
        </Wrap> <Wrap>
          <a href="#">
            <img src="/Assets/images/slider-badag.jpg" alt=""/>
          </a>
        </Wrap> <Wrap>
          <a href="#">
            <img src="/Assets/images/slider-badag.jpg" alt=""/>
          </a>
        </Wrap> <Wrap>
          <a href="#">
            <img src="/Assets/images/slider-badag.jpg" alt=""/>
          </a>
        </Wrap>
      </Carousel>
    </div>
  )
}

export default Slide
const Carousel =  styled(Slider)`
& > button {
  height:100%;
  width:5vw;
  z-index:1
}
`

const Wrap = styled.div`
cursor:pointer;
position:relative;
a{
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor:pointer;
  display:block;
  position:relative;
  padding:4px;
 img{
   width:100%;
   height:100%;

 }
 &:hover{
   padding:0;
   border:4px solid rgba(249,249,249,0.8);
   transition-duration:300ms;
 }
}
`