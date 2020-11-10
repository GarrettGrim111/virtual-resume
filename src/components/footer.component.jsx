import React from "react";
import styled from "styled-components";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterHolder>
      <Copyright>© {currentYear} Garrett Grim, All Rights Reserved </Copyright>
    </FooterHolder>
  );
};

const FooterHolder = styled.div`
  width: 100%;
  height: 2.5rem;
  background-color: #1c1c1c;
  display: flex;
  justify-content: flex-end;
  max-width: 1400px;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 800px) {
    justify-content: center;
  }
`;
const Copyright = styled.span`
  color: #696969;
  font-size: 12px;
  margin: 0 10px;
`;

export default Footer;
