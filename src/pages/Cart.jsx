
import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import styled from 'styled-components'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1`
    text-align: center;
    font-weight: 400;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "failed"&& "none"};
    background-color: ${props=>props.type === "failed" ?"black": "transparent"};
    color: ${props=>props.type === "failed"&& "white"};
`
const TopTexts = styled.div`

`
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`


const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`
const Info = styled.div`
    flex: 3;
`
const Product = styled.div`
display: flex;
justify-content: space-between;

`
const ProductDetail = styled.div`
    flex: 3;
`
const Image = styled.img`
    
`
const Details = styled.div`
    padding: 20px;display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.div`
    
`
const ProductId = styled.div`
    
`
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`
const ProductSize = styled.div`
    
`

const PriceDetail = styled.div`
    
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 14px;
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`
const Hr =styled.hr`
    
`

const Summary = styled.div`
    flex: 1;
    background-color: red;

`





const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>
            Your Bag
        </Title>
        <Top>
            <TopButton>Continue Shoping</TopButton>
            <TopTexts>
                <TopText>Shopping Bag(2)</TopText>
                <TopText>Your Wishlist(0)</TopText>
            </TopTexts>
            <TopButton>Check Out Now</TopButton>
        </Top>
        <Bottom>
            <Info>
                <Product>
                    <ProductDetail>
                        <Image src="data:image/jpeg;base64,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" />
                        <Details>
                            <ProductName><b>Product:</b> Jessie Thunder Shoes</ProductName>
                            <ProductId><b>ID:</b> 987456321</ProductId>
                            <ProductColor color="black"/>
                            <ProductSize><b>Size:</b> 37.5</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                    <ProductAmountContainer>
                        <AddIcon />
                        <ProductAmount>2</ProductAmount>
                        <RemoveIcon />
                    </ProductAmountContainer>
                    <ProductPrice> $ 30</ProductPrice>

                    </PriceDetail>
                </Product>
                <Hr />
                <Product>
                    <ProductDetail>
                        <Image src="data:image/jpeg;base64,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" />
                        <Details>
                            <ProductName><b>Product:</b> Jessie Thunder Shoes</ProductName>
                            <ProductId><b>ID:</b> 987456321</ProductId>
                            <ProductColor color="black"/>
                            <ProductSize><b>Size:</b> 37.5</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                    <ProductAmountContainer>
                        <AddIcon />
                        <ProductAmount>2</ProductAmount>
                        <RemoveIcon />
                    </ProductAmountContainer>
                    <ProductPrice> $ 30</ProductPrice>

                    </PriceDetail>
                </Product>
            </Info>
            <Summary>Lorem</Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart
