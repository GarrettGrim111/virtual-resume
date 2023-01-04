import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Title } from "../styles";
import not_found from "../images/not-found.jpg";

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

display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: url(${not_found});

      width: 100%;
      height: 756px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: 50%;
      `;
const Description = styled.span``;

export default NotFound;
