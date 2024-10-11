
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import styled from 'styled-components'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { mobile } from '../responsive'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import StripeCheckout from "react-stripe-checkout"
import { userRequest } from '../requestMethods'


const KEY = process.env.REACT_APP_STRIPE;




const Container = styled.div``


const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
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
    ${mobile({ display: "none" })}
`
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`


const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    ${mobile({ flexDirection: "column" })}
`
const Info = styled.div`
    flex: 3;
`
const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column" })}

`
const ProductDetail = styled.div`
    flex: 3;
    display: flex;
    
`
const Image = styled.img`
    width: 100px;
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
    margin: 5px;
    ${mobile({ margn: "5px 15px" })}
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}
`
const Hr =styled.hr`
    
`


const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    margin-left: 20px;

`
const SummaryItem = styled.div`
    margin: 30px 0 ;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type ==="total" && "500"};
    font-size: ${props=>props.type ==="total" && "24px"};
`
const SummaryTitle = styled.h1`
    font-weight: 200;

`
const SummaryItemText = styled.div`
    
`
const SummaryItemPrice = styled.div`
    
`
const Button = styled.div`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: White;
`





const Cart = () => {
    const cart = useSelector(state=>state.cart)
    const [stripeToken,setStripeToken] = useState(null)
    const navigate = useNavigate()
    console.log();
    

    const onToken = (token)=>{
            setStripeToken(token)
    }
    
    useEffect(()=>{
        const makeRequest =async ()=>{

            try{
                const res = await userRequest.post("/checkout/payment",{
                  
                   
                    tokenId: stripeToken.id,
                    amount:cart.total * 100,
                    
                })
           
                navigate("/success",{data:res.data})
            }catch(err){

            }
        }
        stripeToken &&  makeRequest()
    },[stripeToken,cart.total,navigate])

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
            <TopButton type="failed">Check Out Now</TopButton>
        </Top>
        <Bottom>
            <Info>
               {cart.products.map(product=>( <Product>
                    <ProductDetail>
                        <Image src={product.img}/>
                        <Details>
                            <ProductName><b>Product:</b> {product.title}</ProductName>
                            <ProductId><b>ID:</b> {product._id}</ProductId>
                            <ProductColor color={product.color}/>
                            <ProductSize><b>Size:</b> {product.size}</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                    <ProductAmountContainer>
                        <AddIcon />
                        <ProductAmount>{product.quantity}</ProductAmount>
                        <RemoveIcon />
                    </ProductAmountContainer>
                    <ProductPrice> $ {product.price*product.quantity}</ProductPrice>

                    </PriceDetail>
                </Product>))}
                <Hr />
               
            </Info>
            <Summary>
                <SummaryTitle>
                    Order Summary
                </SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemText> $ {cart.total}</SummaryItemText>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice> $ 80</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Shipping Discount</SummaryItemText>
                    <SummaryItemPrice> $ -5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                    <SummaryItemText >Total</SummaryItemText>
                    <SummaryItemPrice> $ {cart.total}</SummaryItemPrice>
                </SummaryItem>
                <StripeCheckout
                        name='Jaze Shop'
                        image='./images/small.jpg'
                        billingAddress
                        shippingAddress
                        description={`Your total is $ ${cart.total}`}
                        amount={cart.total*100}
                        token={onToken}
                        stripeKey={KEY}
                >
                     <Button> Checkout Now</Button>
                </StripeCheckout>
               
            </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart
