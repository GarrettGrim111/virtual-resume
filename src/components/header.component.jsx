import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Menu>
        <StyledLink to="/cv">CV</StyledLink>
        <StyledLink to="/portfolio">Portfolio</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </Menu>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Title = styled.span`
  font-size: 40px;
  font-weight: bold;
  color: #696969;
  background-color: #1c1c1c;
  width: 400px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 8px 4px rgba(0, 140, 186, 0.7);

  @media (max-width: 800px) {
    margin-bottom: 1rem;
  }
`;

const Menu = styled.span`
  @media (max-width: 800px) {
    margin-top: 0.5rem;
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 15px;
  background-color: #696969;
  color: white;
  margin: 10px;
  padding: 5px;

  &.active {
    box-shadow: 0 0 4px 2px rgba(0, 140, 186, 0.5);
  }

  @media (max-width: 800px) {
    margin-top: 4rem;
  }
`;

export default Header;
