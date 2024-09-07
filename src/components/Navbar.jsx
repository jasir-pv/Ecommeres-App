import React from 'react'
import styled from 'styled-components'
import Search from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
  height: 60px;
  background-color: blak;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between; 
    align-items: center;
`
const Left = styled.div `
    flex: 1;
    display: flex;
    align-items: center;
`
 const Language = styled.div`
    font-size: 14px;
    cursor: pointer;
 `
const Center = styled.div `
    flex: 1;
`
const Logo = styled.h1`
    font-weight: 10px;
    font-weight: bold;
    text-align: center;
`

const SearchContainer = styled.div`
    border:0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none ;

`
const Right = styled.div `
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;

`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`

const Navbar = () => {
  return (
    <Container>
       <Wrapper>
       <Left><Language>Jasir</Language>
       <SearchContainer>
        <Input/>
       <Search style={{color:"grey", fontSize:16}} />
       </SearchContainer>
       </Left>
       <Center><Logo>Jaze</Logo></Center>
       <Right>
        <MenuItem>Register</MenuItem>
        <MenuItem>Signin</MenuItem>
        <MenuItem>
             <Badge badgeContent={4} color="primary">
                 <ShoppingCartOutlinedIcon color="action" />
               </Badge>
        </MenuItem>
       </Right>
       </Wrapper>
    </Container>
     
  )
}

export default Navbar
