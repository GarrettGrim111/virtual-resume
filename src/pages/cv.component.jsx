import React from "react";
import styled from "styled-components";

import {
  FaGraduationCap,
  FaLanguage,
  FaTools,
  FaGamepad,
} from "react-icons/fa";

import { SubTitle, Bold } from "../styles";
import { IconContext } from "react-icons";
import Header from "../components/header.component";

const CVPage = () => {
  return (
    <>
      <Header title="CV" />
      <Holder>
        <IconContext.Provider value={{ className: "react-icons" }}>
          <ItemHolder>
            <Item>
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
              </Bold>
              Graduation from the economy, bookkeeping and computer science with
              a focus on graphics software.
            </Item>

            <Item>
              <SubTitle>
                Language Skills
                <FaLanguage />
              </SubTitle>
              <Bold>Czech</Bold>– Native proficiency <br />
              <Bold>Spanish</Bold>- Elementary proficiency (Diploma of knowledge
              of Spanish language)
              <br />
              <Bold>English</Bold> - Full professional proficiency (Oxford
              Online Placement Test level C1)
              <br />
              <Bold>Russian</Bold> - Passive
            </Item>
          </ItemHolder>

          <ItemHolder>
            <Item>
              <SubTitle>
                Tools
                <FaTools />
              </SubTitle>
              Cypress, Playwright <br />
              Sass + Styled Components <br />
              JavaScript <br />
              React + React Hooks <br />
              Figma for Design <br />
              Visual Studio Code <br />
              GitHub, Jira, Heroku <br />
            </Item>
            <Item>

              <SubTitle>
                Interests
                <FaGamepad />
              </SubTitle>
              I am an active individual, I like fitness, running, meditation.
              <br />
              Books, anime, science fiction and fantasy movies, if I have time,
              I play on the computer.
              <br /> I like to cook (#kitchenAlchemy).
              <br /> Music from Rock, Metal to classical Jazz from 40s-60s and
              80s.
            </Item>
          </ItemHolder>
        </IconContext.Provider>
      </Holder>
    </>
  );
};

const Holder = styled.div`
  padding: 1rem;
  height: 600px;
  width: 100%;
  display: flex;

  flex-direction: column;
  justify-content: space-between;

  .react-icons {
    margin: 0 10px;
  }

  @media (max-width: 900px) {
    height: auto;
  }
`;

const ItemHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Item = styled.div`
  width: 400px;
  height: auto;

  @media (max-width: 900px) {
    margin-bottom: 20px;
  }
`;

export default CVPage;
