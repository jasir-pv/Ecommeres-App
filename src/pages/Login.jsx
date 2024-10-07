
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container =styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5))
  url("data:image/jpeg;base64,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")
`
const Wrapper =styled.div`
  padding: 20px;
  width: 25%;
  background-color: #fff;
  ${mobile({ width: "75%" })}
`
const Title =styled.h1`
  font-size: 24px;
  font-weight: 300;
`
const Form =styled.form`
  display: flex;
  flex-direction: column;

`
const Input =styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`

const Button =styled.button`
  width: 40%;
  border: none;
  color: white;
  background-color: teal;
  padding: 10px;

`
const Link = styled.a`
  margin: 5px 0; 
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`


const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
            CREATE AN ACCOUNT
        </Title>
        <Form>
            <Input placeholder="User Name"/>
            <Input placeholder="Password"/>
            <Button>Login</Button>
            <Link>Forgott Password</Link>
            <Link>Create a New Account</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login