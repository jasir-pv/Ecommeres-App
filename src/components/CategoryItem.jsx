
// import { Button } from '@mui/material'
import styled from 'styled-components'
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';


const Container =styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "20vh" })}
`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    color: #fff;
`
const Button = styled.button`
    padding: 10px;
    border: none;
    border-radius: 7px;
    cursor: pointer;
    color: gray;
    
    
    &:hover{
       background-color: #e667c4;
       border: 2px solid white;
       color: white;
       transition: ease-in-out 0.3s;
       font-weight: 600;
    }
      
`
const CategoryItem = ({item}) => {
  return (
    <Container>
    <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
            <Title>{item.title}</Title>
            <Button>Shop Now</Button>
        </Info>
        </Link>
    </Container>
    
  )
}

export default CategoryItem;