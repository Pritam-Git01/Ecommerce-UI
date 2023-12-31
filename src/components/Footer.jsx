import { 
    Instagram,
    YouTube,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter} from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
display: flex;


`
const Left = styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo = styled.h1`
`
const Desc = styled.p`
margin: 20px 0px;

`
const SocialContainer = styled.div`
display: flex;

`
const SocialIcon = styled.div`
height: 40px;
width: 40px;
border-radius: 50%;
color: white;
background-color: #${props => props.color};
display:flex;
justify-content: center;
align-items: center;
margin-right: 20px;

`

const Center = styled.div`
flex:1;
padding:20px;
`
const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>STORE.</Logo>
            <Desc>STORE is your one-stop destination for all your fashion needs. Whether you are looking for trendy clothes, accessories, shoes, or bags, we have it all at affordable prices. Browse our latest collections and discover your style today. Follow us on social media and subscribe to our newsletter for exclusive offers and updates.</Desc>
        
        <SocialContainer>
            <SocialIcon color="E4405f">
                <Instagram/>
            </SocialIcon >
            <SocialIcon color="00b4d8">
                <Twitter/>
            </SocialIcon >
           
            <SocialIcon color="55ACEE">
                <Pinterest/>
            </SocialIcon >
            <SocialIcon color="d62828">
                <YouTube/>
            </SocialIcon >
            

        </SocialContainer>
        </Left>
        <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
        </Center>
        <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> Manchester City, United Kingdom
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> pritam.store@help.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      
        </Right>
    </Container>
  )
}

export default Footer