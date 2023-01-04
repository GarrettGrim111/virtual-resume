import React from "react";
import styled from "styled-components";
import Header from "../components/header.component";
import Item from "../components/item.component";
import eshop from "../images/eshop.jpg";
import handcraft from "../images/handcraft.jpg";
import log from "../images/log.jpg";

const Portfolio = () => {
  return (
    <>
      <Header title="From my work" />

      <Holder>
        <Top>
          <Item
            name="eshop-project"
            liveLink="https://eshop-project-jet.vercel.app/"
            gitLink="https://github.com/GarrettGrim111/eshop-project.git"
            img={eshop}
          />
        </Top>
        <Bottom>
          <Item
            name="Quest Log"
            liveLink="https://quest-log-chi.vercel.app/"
            gitLink="https://github.com/GarrettGrim111/Quest-Log.git"
            img={log}
          />
          <Item
            name="Handcrafts"
            liveLink="https://handcrafts.vercel.app/"
            gitLink="https://github.com/GarrettGrim111/handcrafts.git"
            img={handcraft}
          />
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

const Top = styled.div``;
const Bottom = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 750px) {
    display: unset;
    min-height: 100%;
  }
`;

export default Portfolio;
