import styled from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Container = styled.div`

`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1`

`
const Desc = styled.p`
    margin: 20px 0;

    
`
const SocialContainer = styled.div`
    
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=> props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`

`
const List = styled.div`

`
const ListItem = styled.div`

`
const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>JAZE</Logo>
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

        </Right>
      
    </Container>
  )
}

export default Footer
