import React from "react";
import styled from "styled-components";

function Item({ name, liveLink, gitLink, img }) {
  return (
    <Container>
      <Name>{name}</Name>
      <a target="_blank" rel="noreferrer" href={liveLink}>
        <Image img={img} />

        <HyperText>Link to hosted version</HyperText>
      </a>
      <a target="_blank" rel="noreferrer" href={gitLink}>
        <HyperText>Link to Git version</HyperText>
      </a>
    </Container>
  );
}

export default Item;

const Container = styled.div`
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const Name = styled.span`
  margin: 10px 0;
  font-weight: bold;
`;

const Image = styled.div`
  width: 200px;
  height: 150px;
  cursor: pointer;
  border: 1px solid silver;
  padding: 5px;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
  

  ${({ img }) =>
    img &&
    ` 
    background-image: url("${img}");
  `}

  :hover {
    box-shadow: 0 0 4px 2px rgba(0, 140, 186, 0.5);

`;
const HyperText = styled.span`
  font-size: 18px;
  color: black;
  padding: 5px;
  cursor: pointer;

  :hover {
    background-color: #1c1c1c;
    padding: 10px;
    color: white;
    opacity: 1;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }
`;
