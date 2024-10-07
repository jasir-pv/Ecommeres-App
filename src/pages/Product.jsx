import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { mobile } from '../responsive'


const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px",  flexDirection:"column" })}

`
const ImageContainer = styled.div`
    flex: 1;


`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height: "40vh" })}

`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
    ${mobile({ padding: "10px" })}
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0;

`
const Price = styled.span`
    font-weight: 100;
    font-size: 30px;
    color: green;
`
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 50px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`
const Filter = styled.div`
  display: flex;
  align-items: center;
`
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;

`
const FilterColor = styled.div`
  width: 20px;height: 20px;
  border-radius: 50%;
  background-color: ${props=>props.color};
  margin: 0 5px;
  cursor: pointer;
  

`
const FilterSize = styled.select`
  padding: 5px;

`
const FilterSizeOption = styled.option`
  
`
const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  ${mobile({ width: "100%" })}

`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;


`
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;

`
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: #fff;
  cursor: pointer;
  font-weight: 500;
  color: teal;

  &:hover{
    background-color: teal;
    color: white;
    transition: 0.5s ease;
  }
`







const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7AwwGqFUzGMdjt-YzNKKh8sGFGiH_yaFZ0A&s"/>
        </ImageContainer>
        <InfoContainer>
           <Title>
            Italian Denim Jacket
           </Title> 
           <Desc>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.H1

           </Desc>
           <Price>
            $20
           </Price>
           <FilterContainer>
              <Filter>
                <FilterTitle> Color</FilterTitle>
                <FilterColor color="black"/>
                <FilterColor color="darkblue"/>
                <FilterColor color="grey"/>
              </Filter>
              <Filter>
              <FilterTitle>Size</FilterTitle>
                <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption> 
                <FilterSizeOption>S</FilterSizeOption> 
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                </FilterSize>
              </Filter>
           </FilterContainer>
           <AddContainer>
            <AmountContainer>
              <RemoveIcon />
              <Amount>1</Amount>
              <AddIcon />
            </AmountContainer>
            <Button>Add to Cart</Button>
           </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}



export default Product
