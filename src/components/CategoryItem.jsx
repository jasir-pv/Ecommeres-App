
// import { Button } from '@mui/material'
import styled from 'styled-components'

const Container =styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`

const Image = styled.div`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: yellow;
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
     
`
const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img} />
        <Info>
            <Title>{item.title}</Title>
            <Button>Shop Now</Button>
        </Info>
    </Container>
    
  )
}

export default CategoryItem
