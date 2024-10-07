import styled from "styled-components"
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { useState } from "react";
import {sliderItems} from "../data"
import { mobile } from '../responsive';


const Container =styled.div`
    width:  100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    margin-top: 30px;
    ${mobile({ display: "none" })}

`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    background-color: #fff;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left:    ${props => props.direction === "left" && "10px"};
    right:  ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100px;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);

`
const Slide = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};

`
const ImgContainer = styled.div`
    flex: 1;
    height: 100%; 

`
const Image = styled.img`
    height: 80%;
    margin-top: 2px;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 70px;

`
const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    background-color: transparent;
    cursor: pointer;
    font-size: 20px;
`                  

const Slider = () => {

  const [slideIndex, setSliderIndex] = useState(0)
   const handleClick =(direction)=> {
    
    if (direction ==="left"){
      setSliderIndex(slideIndex>0 ? slideIndex-1 : 2)
    }else{
      setSliderIndex(slideIndex <2 ? slideIndex +1 : 0)
    }
   }
  return (
    <Container >
      <Arrow direction="left"  onClick={()=>handleClick("left")}>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex= {slideIndex}> 
      {sliderItems.map((item)=>(
        <Slide bg={item.bg} key={item.id}>
          <ImgContainer>
            <Image src={item.img}/>
          </ImgContainer>
          <InfoContainer>
            <Title> {item.title}</Title>
            <Desc>{item.desc}</Desc>
            <Button> Shop Now</Button>
          </InfoContainer>
          </Slide>
        ))}
       </Wrapper>
      <Arrow direction="right"  onClick={()=>handleClick("right")}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  )
}

export default Slider
