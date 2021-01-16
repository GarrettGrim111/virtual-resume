import React from "react";
import styled from "styled-components";
import Header from "../components/header.component";

const Portfolio = () => {
  return (
    <>
      <Header title="From my work" />

      <Holder>
        <Top>
          <Item>
            <Name>eshop-project</Name>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://eshop-project-live.herokuapp.com/"
            >
              <Image>
                <img src="./assets/icon2.jpg" alt="" />
              </Image>
              <HyperText>Link to hosted version</HyperText>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/GarrettGrim111/eshop-project.git"
            >
              <HyperText>Link to Git version</HyperText>
            </a>
          </Item>
        </Top>
        <Bottom>
          <Item>
            <Name>Quest Log</Name>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://quest-journal.herokuapp.com/"
            >
              <Image>
                <img src="./assets/log-icon.jpg" alt="" />
              </Image>
              <HyperText>Link to hosted version</HyperText>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/GarrettGrim111/Quest-Log.git"
            >
              <HyperText>Link to Git version</HyperText>
            </a>
          </Item>
          <Item>
            <Name>Builds of Skyrim</Name>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://builds-of-skyrim.herokuapp.com/"
            >
              <Image>
                <img src="./assets/icon1.jpg" alt="" />
              </Image>
              <HyperText>Link to hosted version</HyperText>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/GarrettGrim111/builds.git"
            >
              <HyperText>Link to Git version</HyperText>
            </a>
          </Item>
        </Bottom>
      </Holder>
    </>
  );
};

const Holder = styled.div`
  width: 100%;
  margin-top: 20px;

  @media (max-width: 800px) {
    margin-top: unset;
  }

  a {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
  }
`;

const Name = styled.span`
  margin: 10px 0;
  font-weight: bold;
`;

const Item = styled.div`
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Top = styled.div``;
const Bottom = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 750px) {
    display: unset;
    min-height: 100%;
  }
`;

const Image = styled.div`
  img {
    width: 200px;
    height: 150px;
    object-fit: cover;
    border: 1px solid silver;
    padding: 5px;
  }

  img:hover {
    box-shadow: 0 0 4px 2px rgba(0, 140, 186, 0.5);
  }

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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
    /* transition-delay: 0.5s; */
    opacity: 1;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }
`;

export default Portfolio;
