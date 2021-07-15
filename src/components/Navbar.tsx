import React, { useState } from "react";
import styled from "styled-components";
import { FiMenu } from "@react-icons/all-files/fi/FiMenu";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import { motion, AnimatePresence } from "framer-motion";
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
  justify-content: flex-end;
  align-items: center;

  padding: 1rem 10%;

  nav, img {
    display: none;
  }

  @media (min-width: 1000px) {
    nav, img {
      display: grid;
    }
    justify-content: space-between;
    aside {
      display: none;
    }
  }
`;

const IconContainer = styled.aside`
  cursor: pointer;

  display: flex;
  justify-content: flex-end;
`;

const ItemsContainer = styled.nav`
  display: grid;
  grid-template-columns: repeat(${NAV_ELEMENTS.length}, auto);
  gap: 4rem;
`;

const ExpandedNavbar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  background-color: white;
  border-bottom: 1px #020202 solid;

  padding: 1rem 10%;

  @media (min-width: 1000px) {
    display: none;
  }
`;

const NavItem = styled(Link)`
  text-decoration: none;
  position: relative;

  h5 {
    margin: 0;
  }

  &:after {
    display: block;
    content: "";
    border-bottom: solid 2px #333;  
    transform: scaleX(0);  
    transition: transform 250ms ease-in-out;
    transform-origin:100% 50%;
  }
  &:hover:after { 
    transform: scaleX(1);
    transform-origin:0 10%;
  }
`;

const ExpandedNavbarItemsContainer = styled.div`
  display: grid;
  gap: 2rem;
`

const Logo = styled.img`
  width: 56px;
  height: 56px;

  cursor: pointer;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleOpen = () => setIsOpen(v => !v);

  return (
    <AnimatePresence>
    <NavbarWrapper>
      <ExpandedNavbar
        initial={{ opacity: 0, visibility: "hidden" }}
        animate={{
          opacity: isOpen ? 1 : 0,
          visibility: "visible",
        }}
        exit={{
          opacity: 0,
        }}
      >
        <IconContainer>
          <FaTimes color={COLORS.grayFirst} size={36} onClick={toggleOpen} />
        </IconContainer>
        <ExpandedNavbarItemsContainer>
          {NAV_ELEMENTS.map(({ name, path }) => (
            <NavItem to={path} key={`${name}__${path}`} onClick={toggleOpen}>
              <H5>{name}</H5>
            </NavItem>
          ))}
        </ExpandedNavbarItemsContainer>
      </ExpandedNavbar>
      <Logo src={logo} />
      <IconContainer>
        <FiMenu color={COLORS.grayFirst} size={36} onClick={toggleOpen} />
      </IconContainer>
      <ItemsContainer>
        {NAV_ELEMENTS.map(({ name, path }) => (
          <NavItem to={path} key={`${name}__${path}`}>
            <H5>{name}</H5>
          </NavItem>
        ))}
      </ItemsContainer>
    </NavbarWrapper>
    </AnimatePresence>
  );
};

export default Navbar;
