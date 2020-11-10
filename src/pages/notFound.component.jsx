import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Title } from "../styles";

const NotFound = () => {
  return (
    <div>
      <Holder>
        <Title>Page not found</Title>
        <Link className="link" to="/">
          <Description>
            This is very unfortunate, <br /> please click on this text to return
            to landing page
          </Description>
        </Link>
      </Holder>

      <Image />
    </div>
  );
};

const Holder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #1c1c1c;

  .link {
    color: white;
    margin: 15px;
  }
`;

const Image = styled.div`
  background-image: url("./assets/not-found.jpg");
  width: 100%;
  height: 570px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 75%;
`;
const Description = styled.span``;

export default NotFound;
