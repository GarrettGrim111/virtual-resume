import React from "react";
import styled from "styled-components";
import Navigation from "./../components/navigation.component";
import { Title, Header } from "../styles";

const Contact = () => {
  return (
    <Wrapper>
      <Navigation />
      <Header>
        <Title>Contact</Title>
      </Header>
      <Holder2>
        <Holder>
          <Image src="./assets/profil.jpg" alt="" />
          <Info>
            Nationality: Czech <br />
            Telephone: +420 730625 755 <br />
            Email: garrett.grim111@gmail.com
          </Info>
        </Holder>
      </Holder2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  flex-direction: row;
`;

const Holder2 = styled.div`
  position: absolute;
  top: 60px;
  bottom: 2.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const Holder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    display: unset;
  }
`;
const Image = styled.img`
  width: 200px;
  height: auto;
  margin: 0 15px;
  object-fit: cover;
`;
const Info = styled.p`
  line-height: 1.75;
`;

export default Contact;
