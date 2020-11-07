import React from "react";
import styled from "styled-components";
import Navigation from "./../components/navigation.component";
import {
 
  FaGraduationCap,
  FaLanguage,
  FaTools,
  FaGamepad,
} from "react-icons/fa";

import { Header, Title, SubTitle, Bold } from "../styles";

const CVPage = () => {
  

  return (
    <Wrapper>
      <Header>
        <Title>CV</Title>
      </Header>

      <Navigation />

      <UpperHolder>
        <Education>
          <SubTitle>
            Education Background
            <FaGraduationCap />
          </SubTitle>
          <Bold>
            2016-2020 Internationally Hospitality Management at UCN, AALBORG
          </Bold>
          Courses in Experience Economy, Leadership, Tourism Management,
          Creativity and Innovation, Revenue management, Budgeting etc.
          <br />
          <br />
          <Bold>
            2008-2012 Business Academy in Veselí nad Moravou, major IT in
            Economics
          </Bold>{" "}
          Graduation from the economy, bookkeeping and computer science with a
          focus on graphics software.
        </Education>
        

        <Languages>
          <SubTitle>
            Language Skills
            <FaLanguage />
          </SubTitle>
          <Bold>Czech</Bold>– Native proficiency <br />
          <Bold>Spanish</Bold>- Elementary proficiency (Diploma of knowledge of
          Spanish language)
          <br />
          <Bold>English</Bold> - Full professional proficiency (Oxford Online
          Placement Test level C1)
          <br />
          <Bold>Russian</Bold> - Passive
        </Languages>
      </UpperHolder>

      <LowerHolder>
        <Tools>
          <SubTitle>
            Tools
            <FaTools />
          </SubTitle>
          Microsoft Office, <br /> WWW, HTML+CSS <br /> Sass <br /> JavaScript,
          React, React Hooks <br />
          Styled Components <br />
          Redux <br />
          Stripe
          <br /> FireBase
          <br /> Figma for Design <br />
          Visual Studio GitHub <br /> Heroku
        </Tools>
        <Interests>
          {" "}
          <SubTitle>
            Interests
            <FaGamepad />
          </SubTitle>
          I am an active individual, I like fitness, running, meditation. <br />
          Books, anime, science fiction and fantasy movies, if I have time, I
          play on the computer.
          <br /> I like to cook (#kitchenAlchemy).
          <br /> Music from Rock, Metal to classical Jazz from 40s-60s and 80s.
        </Interests>
      </LowerHolder>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  @media (max-width: 800px) {
    /* width: ;
      height: 60px;
      position: unset; */
    margin: 0 10px;
    height: 60%;
  }
`;

const UpperHolder = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 15px 0;
`;
const LowerHolder = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 15px 0;
`;

const Education = styled.div`
  width: 400px;
`;

const Languages = styled.div`
  width: 400px;
`;
const Tools = styled.div`
  width: 400px;
`;

const Interests = styled.div`
  width: 400px;
`;

export default CVPage;
