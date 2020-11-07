import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { CgArrowDownO } from "react-icons/cg";

import { Title, SubTitle } from "./../styles";

const LandingPage = () => {
  return (
    <Wrapper>
      <Header>
        <NameBox>
          <h1>Garrett Grim</h1>
          <h4>Front end Developer</h4>
          <Link to="/contact" className="hyperlink">
            Contact me
          </Link>
        </NameBox>
        {/* <Holder> */}

        <HeaderImage src="./assets/header-img.jpg" alt="" />
        {/* </Holder> */}
      </Header>

      <Bottom>
        <Holder>
          <Link to="/portfolio" className="link">
            <Title>My work</Title>
            <CgArrowDownO size="40px" color="#696969" />
          </Link>
        </Holder>
        <ProfileHolder>
          <SubTitle>About me</SubTitle>
          <Profile>
            My motto is "Play with the cards that life gives you" I don't
            consider myself an "adventurer" even though I was situated mostly
            abroad. I lived and worked in England, Scotland, for a while in
            Spain, but mainly in Denmark. I have worked with colleagues of
            different faiths, cultures and nationalities and it has greatly
            enriched me. For the last year, I have been very active in IT and I
            have completed a number of courses and projects in this sector. I am
            adaptable to the conditions and work with others.
          </Profile>
          <Link to="/cv" className="hyperlink">
            More
          </Link>
        </ProfileHolder>
      </Bottom>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .hyperlink {
    text-decoration: none;
    color: white;
    font-size: 14px;
    background: linear-gradient(
      90deg,
      rgba(28, 28, 28, 1) 0%,
      rgba(105, 105, 105, 1) 50%,
      rgba(28, 28, 28, 1) 100%
    );
    padding: 15px;
    margin: 20px 0;
    width: 150px;
    text-align: center;
  }
`;
const Header = styled.div`
  width: 100%;
  height: 400px;
  background-color: #1c1c1c;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Holder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 50%;

  .link
 { text-decoration-color: #696969;}
`;

const HeaderImage = styled.img`
  width: 50%;
  height: inherit;
  object-fit: cover;
`;

const NameBox = styled.div`
  width: 50%;
  color: white;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  /* text-align: center; */
`;

const ProfileHolder = styled.div`
  width: 50%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Profile = styled.div`
  color: #696969;
  font-size: 14px;
`;

export default LandingPage;
