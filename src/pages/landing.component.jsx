import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Title } from "./../styles";

const LandingPage = () => {
  return (
    <Wrapper>
      <Header>
        <NameBox>
          <h1>Garrett Grim</h1>
          <h4>Front end Developer</h4>
          <Link to="/contact" className="contact">
            Contact me
          </Link>
        </NameBox>
        {/* <Holder> */}

        <HeaderImage src="./assets/header-img.jpg" alt="" />
        {/* </Holder> */}
      </Header>

      <Container>
        <ProfileHolder>
          <Title>About me</Title>
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
        </ProfileHolder>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Header = styled.div`
  width: 100%;
  height: 400px;
  background-color: #1c1c1c;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// const Holder = styled.div``;

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
  .contact {
    text-decoration: none;
    color: white;
    font-size: 14px;
    background-color: #696969;
    padding: 15px;
    margin: 20px 0;
    
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
