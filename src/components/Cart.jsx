import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcment from "./Announcment";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
  height: 170px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span`
  flex: 1;
`;
const ProductId = styled.span`
  flex: 1;
`;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span`
  flex: 1;
`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProductAmountContainer=styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`
const ProductAmount=styled.div`
font-size: 24px;
margin: 5px;
`
const ProductPrice=styled.div`
font-size: 30px;
font-weight: 200;
`

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin: 5px 0px;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgrey;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SummaryTitle = styled.h1`
font-weight: 200;
`;
const SummaryItem = styled.div`
margin:30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type === 'total' && "500"};
font-size: ${props=>props.type === 'total' && "24px"};
`;
const SummaryItemText = styled.span`
  flex: 1;
`;
const SummaryItemPrice = styled.span`
  flex: 1;
`;
const Button = styled.button`
 width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
`;
const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcment />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://m.media-amazon.com/images/I/613dD-CaVsL._AC_SX466_.jpg" />
                <Details>
                  <ProductName>
                    <b>Product:</b>JESSSIE SPRAY
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>65489251
                  </ProductId>
                  <ProductColor color="gold" />
                  <ProductSize>
                    <b>Size:</b>100ml
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                  <ProductAmountContainer>
                      <Add/>
                        <ProductAmount>2</ProductAmount>
                      <Remove/>
                  </ProductAmountContainer>
                  <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr/>
            <Product>
              <ProductDetail>
                <Image src="https://img.fruugo.com/product/2/41/166941412_max.jpg" />
                <Details>
                  <ProductName>
                    <b>Product:</b> DOG VEST
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>65489251
                  </ProductId>
                  <ProductColor color="red" />
                  <ProductSize>
                    <b>Size:</b>XS
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                  <ProductAmountContainer>
                      <Add/>
                        <ProductAmount>1</ProductAmount>
                      <Remove/>
                  </ProductAmountContainer>
                  <ProductPrice>$ 22</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                  <SummaryItemText>Subtotal</SummaryItemText>
                  <SummaryItemPrice>$ 80</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                  <SummaryItemText>Estimated Shipping</SummaryItemText>
                  <SummaryItemPrice>$ 5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                  <SummaryItemText>Shipping Discount</SummaryItemText>
                  <SummaryItemPrice>$ -5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                  <SummaryItemText >Total</SummaryItemText>
                  <SummaryItemPrice>$ 80</SummaryItemPrice>
              </SummaryItem>
              <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Cart;
