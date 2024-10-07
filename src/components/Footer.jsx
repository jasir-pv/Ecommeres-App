import styled from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import { mobile } from '../responsive';


const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1`
    font-size: 25px;
    font-weight: 800;

`
const Desc = styled.p`
    margin: 20px 0;
    font-size: 14px;

    
`
const SocialContainer = styled.div`
display: flex;

    
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #${props=> props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
    
`
const Title = styled.h3`
    font-size: 16px;
`
const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;


`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    font-size: 14px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
`
const ContactItem = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;


`
const Payment = styled.img`
    width: 60%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>JAZE.</Logo>
            <Desc>
                There are many variations of passangers of Lorem ipsum,
                But available Majority of peoples have suffered you
            </Desc>
            <SocialContainer>
                <SocialIcon>
                    <FacebookIcon/>
                </SocialIcon>
                <SocialIcon>
                    <InstagramIcon/>
                </SocialIcon>
                <SocialIcon>
                    <WhatsAppIcon/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title> Useful Links</Title>
            <List>
                <ListItem>jasir</ListItem>
                <ListItem>jasir</ListItem>
                <ListItem>jasir</ListItem>
                <ListItem>jasir</ListItem>
                <ListItem>jasir</ListItem>
                <ListItem>jasir</ListItem>
                <ListItem>jasir</ListItem>
                <ListItem>jasir</ListItem>
            </List>
        </Center>
        <Right>
        <Title>Contact</Title>
        <ContactItem> <RoomIcon style={{marginRight:"10px"}} />J Mart ,Perinthalmanna,Malappuram, 679307 </ContactItem>
        <ContactItem> <PhoneIcon style={{marginRight:"10px"}} />7034081363</ContactItem>
        <ContactItem><MailOutlinedIcon style={{marginRight:"10px"}} /> jasirahsanpv40@gmail.com</ContactItem>
        <Payment src="https://www.transparentpng.com/download/payment-method/KWM0Hm-payment-method-bitcoin-photo.png"/>
        </Right>
      
    </Container>
  )
}

export default Footer
