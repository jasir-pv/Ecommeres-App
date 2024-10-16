import styled from "styled-components"
import { mobile } from "../responsive";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { login } from '../redux/apiCalls';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5) ), 
                url("https://i.pinimg.com/736x/0a/be/92/0abe9229c939b8361f2d8a1085c3be0d.jpg");
    background-size:     cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 30%;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.8);
    ${mobile ({width: "75%"})}
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 10px 0px ;
    padding: 10px;
`;

const Button = styled.button`
    width: 40%;
    padding: 15px 20px;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    &:disabled{
      background-color:#66b2b2;
      cursor:not-allowed;
    }
`;

const Link = styled.a`
    margin: 10px 0px;
    font-size: 12px;
    color: teal;
    text-decoration: underline;
    cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const {isFetching, error} = useSelector((state) => state.user);

  const handleClick =(e)=>{
    e.preventDefault()
    login(dispatch, {username,password})
  }


  return (
    <Container>
    <Wrapper>
      <Title>SIGN IN</Title>
        <Form>
        <Input placeholder="username" onChange={(e)=>setUsername(e.target.value)} />
        <Input placeholder="password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
      <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
      {error && <Error>Something went wrong</Error>}
      <Link>DO NOT REMEMBER YOUR PASSWORD?</Link>
      <Link >CREATE A NEW ACCOUNT</Link>
      </Form>
    </Wrapper>
    </Container>
  )
}

export default Login
