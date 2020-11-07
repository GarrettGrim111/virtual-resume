import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navigation = () => {
  return (
    <Holder>
      <StyledLink to="/cv">
        <NavItem>CV</NavItem>
      </StyledLink>
      <StyledLink to="/portfolio">
        <NavItem>Portfolio</NavItem>
      </StyledLink>
      <StyledLink to="/contact">
        <NavItem>Contact</NavItem>
      </StyledLink>
    </Holder>
  );
};

const Holder = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
`;

const NavItem = styled.span`
  color: white;
`;

// this will create colorful border for active buble

const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 15px;
  background-color: #696969;
  margin: 10px;
  padding: 5px;
  /* border-style: solid;
  border-width: 2px;
  border-color: greenyellow; */

  &.active {
    /* border-style: solid;
    border-width: 2px;
    border-color: red; */
    box-shadow: 0 0 4px 2px rgba(0, 140, 186, 0.5);
  }
`;
export default Navigation;
