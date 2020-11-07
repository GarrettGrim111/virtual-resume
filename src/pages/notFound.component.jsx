import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Wrapper>
      <Holder>
        <Image></Image>
        <Title>Page not found</Title>
        <Link to="/">
          <Description>
            This is very unfortunate, please click on this text to return to
            landing page
          </Description>
        </Link>
      </Holder>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  /* display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%; */
`;
const Holder = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
`;
const Title = styled.h1`
  margin: 25px auto;
`;
const Image = styled.div``;
const Description = styled.span`
  color: lime;
`;
// const Hyperlink = styled.span``;

export default NotFound;
