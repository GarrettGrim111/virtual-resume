import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterHolder>
      <Copyright> © 2020 Garrett Grim, All Rights Reserved </Copyright>
    </FooterHolder>
  );
};

const FooterHolder = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  background-color: #1c1c1c;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  /* @media (max-width: 800px) {
    position: absolute;
    bottom: 0;
  }  */
`;
const Copyright = styled.span`
  color: #696969;
  font-size: 12px;
  margin: 0 10px;
`;

export default Footer;
