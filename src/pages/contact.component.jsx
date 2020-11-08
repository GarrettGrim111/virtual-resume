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
  height: 100%;
`;

const Holder2 = styled.div`
  position: absolute;
  top: 60px;
  bottom: 2.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Holder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
