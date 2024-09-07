import styled from "styled-components"
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

const Container =styled.div`
    width:  100%;
    height: 100vh;
    display: flex;

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
    left: 10px  ;
    margin: auto;.
`

const Slider = () => {
  return (
    <Container>
      <Arrow>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Arrow>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  )
}

export default Slider
