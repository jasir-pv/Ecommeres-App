
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container =styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)) url("data:image/jpeg;base64,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")
`
const Wrapper =styled.div`
  padding: 20px;
  width: 40%;
  background-color: #fff;
  ${mobile({ width: "75%" })}
`
const Title =styled.h1`
  font-size: 24px;
  font-weight: 300;
`
const Form =styled.form`
  display: flex;
  flex-wrap: wrap;
`
const Input =styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
`
const Agreement =styled.div`
  font-size: 13px;
  margin: 20px 0;
`
const Button =styled.button`
  width: 40%;
  border: none;
  color: white;
  background-color: teal;
  padding: 10px;

`

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
            CREATE AN ACCOUNT
        </Title>
        <Form>
            <Input placeholder="Name"/>
            <Input placeholder="Last Name"/>
            <Input placeholder="User Name"/>
            <Input placeholder="Email"/>
            <Input placeholder="Password"/>
            <Input placeholder="Confim Password"/>
            <Agreement>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Agreement>
            <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
