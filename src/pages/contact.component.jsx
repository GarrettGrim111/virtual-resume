import React from "react";
import styled from "styled-components";
import profil  from "../images/profil.jpg";

import Header from "./../components/header.component";

const Contact = () => {
  return (
    <>
      <Header title="Contact" />
      <Container>
        <Holder>
          <Image src={profil} alt="" />
          <Info>
            Nationality: Czech <br />
            Telephone: +420 730 625 755 <br />
            Email:
            <a href="mailto:garrett.grim111@gmail.com">
              garrett.grim111@gmail.com
            </a>
          </Info>
        </Holder>
      </Container>
    </>
  );
};

const Container = styled.div`
  @media (max-width: 800px) {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Holder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    display: block;
  }
`;
const Image = styled.img`
  width: 200px;
  height: 250px;
  margin: 0 15px;
  object-fit: cover;
  -webkit-box-shadow: 0px 2px 20px 12px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 20px 12px rgba(0, 0, 0, 0.3);
`;
const Info = styled.p`
  line-height: 1.75;
`;

export default Contact;
