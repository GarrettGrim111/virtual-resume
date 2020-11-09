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
          <LinkContainer>
            <Link to="/portfolio" className="link">
              <Title>My work</Title>
              <CgArrowDownO size="40px" color="#696969" />
            </Link>
          </LinkContainer>
        </Holder>
        <ProfileHolder>
          <SubTitle className="sub">About me</SubTitle>
          <Profile>
            My motto is "Play with the cards that life gives you" <br />I don't
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
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  max-width: 1400px;
  position: relative;
  background-color: lightgray;

  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  /*
  //tablet styles
  @media (max-width: 1000px) {
    flex-direction: column;
  } */

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
  height: 350px;
  background-color: #1c1c1c;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Bottom = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  @media (max-width: 900px) {
    display: block;
  }
`;

const Holder = styled.div`
  width: 50%;
  min-height: 335px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    min-height: 150px;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  .link {
    text-decoration-color: #696969;
  }
`;

const HeaderImage = styled.img`
  width: 50%;
  height: 150%;
  object-fit: cover;
  -webkit-box-shadow: 0px 12px 15px 12px rgba(0, 0, 0, 0.48);
  box-shadow: 0px 12px 15px 12px rgba(0, 0, 0, 0.48);
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

const ProfileHolder = styled.div`
  position: absolute;
  right: 15px;
  bottom: 50px;
  width: 55%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  -webkit-box-shadow: 0px 12px 15px 12px rgba(0, 0, 0, 0.48);
  box-shadow: 0px 12px 15px 12px rgba(0, 0, 0, 0.48);

  .sub {
    margin: 10px;
  }

  @media (max-width: 1100px) {
    .sub {
      margin-top: 20px;
    }
    .hyperlink {
      margin: 10px 0;
    }
  }

  @media (max-width: 900px) {
    position: unset;
    height: auto;
    margin: 20px 0;
    width: auto;

    .sub {
      margin: 20px;
    }
  }
`;

const Profile = styled.div`
  color: #696969;
  font-size: 14px;
  margin: 0 20px;
  padding: 0 10px;
`;

export default LandingPage;
