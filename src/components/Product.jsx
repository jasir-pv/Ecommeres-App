import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';


const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    position: relative;

    

`

const Circle = styled.div `
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    
`
const Image = styled.img `
    height: 75%;
    z-index: 2;
`
const Info = styled.div `
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    color: aliceblue;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }


`
const Icon = styled.div `
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;

    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
        color: black;
    }

`

const Product = ({item}) => {
  return (
    <Container>
      <Circle />
      <Image src= {item.img} />
      <Info>
            <Icon> <ShoppingCartOutlined /></Icon>
           <Link to={`/product/${item._id}`}>
            <Icon> <SearchOutlined /></Icon>
            </Link>
            <Icon> <FavoriteBorderOutlined /></Icon>
      </Info>
    </Container>
  )
}

export default Product
