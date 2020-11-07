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
`;
const Copyright = styled.span`
  color: #696969;
  font-size: 12px;
  padding: 15px;
`;

export default Footer;
