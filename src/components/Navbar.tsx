import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import logo from "../images/logo.svg";
import { COLORS, NAV_ELEMENTS } from "../utils/constants";
import { H5 } from "../utils/typography";

const NavbarWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;

  background-color: #fff;

  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 10%;
`;

const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${NAV_ELEMENTS.length}, auto);
  gap: 4rem;
`;

const NavItem = styled(Link)`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 0.15rem;
    text-decoration-color: ${COLORS.grayFirst};
    text-underline-offset: 0.4rem;
  }
`;

const Logo = styled.img`
  width: 56px;
  height: 56px;

  cursor: pointer;
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Logo src={logo} />
      <ItemsContainer>
        {NAV_ELEMENTS.map(({ name, path }) => (
          <NavItem to={path} key={`${name}__${path}`}>
            <H5>{name}</H5>
          </NavItem>
        ))}
      </ItemsContainer>
    </NavbarWrapper>
  );
};

export default Navbar;
