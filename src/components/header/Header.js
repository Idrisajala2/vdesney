import React from 'react'
import styled from "styled-components"
import {GoThreeBars} from "react-icons/go"
import {GiCancel} from "react-icons/gi"
const Header = () => {
    const [toggle,setToggle]= React.useState(false)

    const toggleChange = () => {
     setToggle(!toggle)
    }
  return (
    <div>
       <Contaner>
           <Wrapper>
           <Logodiv>
                   < Logoicon src="/assets/images/logo.svg" alt="good imgs"/>
                   </Logodiv>
               <Navigator>
                   
                   
                   <Navs>
                       <Nav>
                           <Icons src="/assets/images/home-icon.svg" />
                           <span>home</span>
                       </Nav>
                       <Nav>
                           <Icons src="/assets/images/search-icon.svg"/>
                           <span>search</span>
                       </Nav>
                       <Nav>
                           <Icons src="/assets/images/watchlist-icon.svg"/>
                           <span>WatchList</span>
                       </Nav>
                       <Nav>
                           <Icons src="/assets/images/original-icon.svg"/>
                           <span>original</span>
                       </Nav>
                       
                       <Nav>
                           <Icons src="/assets/images/series-icon.svg"/>
                           <span>series</span>
                       </Nav>
                       <Nav>
                           <Icons src="/assets/images/play-icon-white.png"/>
                           <span>play</span>
                       </Nav>
                   </Navs>
                   <Avater>
                       <Icon src="/assets/images/viewers-marvel.png" alt="good imge"/>
                   </Avater>
               </Navigator>
               <Burger>
                   {toggle?
                          <GoThreeBars onClick={toggleChange} color="white" size="25px"/>:
                          <GiCancel onClick={toggleChange} size="25px" color="white"/>
                   }
               </Burger>
           </ Wrapper>
       </Contaner>
    </div>
  )
}

export default Header;


const Contaner = styled.div`
height:90px;
width:100%;
background:black;
display:flex;
align-items:center;
justify-content:center;

`
const Wrapper = styled.div`
width:90%;
display:flex;
align-items:center;
 justify-content: space-between;
height:100%;

`
const Navigator = styled.div`
width:880px;
height:60px;

display:flex;
justify-content:space-between;
flex:1;
@media screen and (max-width:768px){
    display:none;
}
`
const Logodiv = styled.div`

margin-right: 40px;

/* height:100%; */
/* display:flex;
align-items:center; */



`
const Logoicon = styled.img`

width:80px;
object-fit:contain;
`
const Navs = styled.div`
display:flex;
align-items:center;
justify-content:space-between;

width:600px;



`
const Nav = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
span{
    color:white;
    margin-left:3px;
    font-size:15px;
    font-weight: 700;
    cursor:pointer;
    position: relative;
}
::after{
    
    content:"";
    position:absolute;
    height:2px;
    /* width:10%; */
    background-color:white;
    
    bottom: -6px;
    left:0px;
    right:0px;
    opacity:0;
    transition:all 350ms cubic-bezier(0.25, 0.46, 0.45, 0.95) 0s;
    
}
:hover{
    transform:scale(1.1);
  ::after{
      opacity:2;
      
  }   
}

`
const Icons = styled.img`
height:25px;
width:25px;
`
const Icon = styled.img`
height:55px;
width:55px;


`
const Avater = styled.div`
height:55px;
width:55px;
background-color:silver;
border-radius:50%;
;



`
 const Burger = styled.div`
 display:none;
 @media screen and (max-width:768px){
     display:block;
 }
 `
// const Contaner = styled.div``
// const Contaner = styled.div``
// const Contaner = styled.div``

// const Contaner = styled.div``
