import SendIcon from '@mui/icons-material/Send';
import styled from "styled-components"
import { mobile } from '../responsive';


const Container = styled.div`
    height: 60vh;
    background-color: #fce6f6;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h2`
    font-size: 45px;
    margin-bottom: 10px;
`
const Desc = styled.div`
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({ texAlign: "center" })}
`

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({ width: "80%" })}
`

const Input = styled.input`
    border: none;
    flex: 8;
    padding: 20px;

`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
`
const Newsletter = () => {
  return (
    <Container>
      <Title>
            News Letter
      </Title>
      <Desc> Get timely updates from your favorate Products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
            <SendIcon/>
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter
