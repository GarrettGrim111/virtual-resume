import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Title, Wrapper } from "../styles";

const NotFound = () => {
  return (
    <Wrapper>
      <Holder>
        <Image></Image>
        <Title>Page not found</Title>
        <Link className="link" to="/">
          <Description>
            This is very unfortunate, please click on this text to return to
            landing page
          </Description>
        </Link>
      </Holder>
    </Wrapper>
  );
};

const Holder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1c1c1c;

  .link {
    color: white;
    margin: 15px;
  }
`;

const Image = styled.div``;
const Description = styled.span``;
// const Hyperlink = styled.span``;

export default NotFound;
