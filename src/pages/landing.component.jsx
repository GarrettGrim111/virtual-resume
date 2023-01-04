import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import header from "../images/header.jpg";

import { CgArrowDownO } from "react-icons/cg";

import { Title, SubTitle } from "./../styles";

const LandingPage = () => {
  return (
    <Container>
      <Header>
        <NameBox>
          <h1>Garrett Grim</h1>
          <h4>QA Engineer & Product management assistant</h4>
          <Link to="/contact" className="hyperlink">
            Contact me
          </Link>
        </NameBox>

        <HeaderImage src={header} alt="" />
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
            I don't consider myself an "adventurer" even though I was mostly situated abroad. I lived and worked in England, Scotland, for a while in Spain, but mainly in Denmark. I have worked with colleagues of different faiths, cultures and nationalities and it has greatly enriched me, at the moment I am very active in IT.
            <br />
            Regarding my work experience, I started to work for a startup Dig-it-ally.
            I started as QA Engineer for a year and 4 months.
            The company was busy with several projects at once and more "hands" were needed therefore I was also appointed to the position of Junior product owner for more than a year.
            <br />
            It was a great experience where I met amazing people, now when the project is over I am looking for new opportunities.
          </Profile>
          <Link to="/cv" className="hyperlink">
            More
          </Link>
        </ProfileHolder>
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
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
    display: flex;
    justify-content: space-between;
    flex-direction: column;
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
  justify-content: space-between;
  align-items: center;
  height: 540px;

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
  width: 100vh;
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
    .hyperlink {
      margin-bottom: 30px;
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
