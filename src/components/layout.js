import "./style.css";
import React from "react";
import styled from "styled-components";

import Navbar from "./Navbar";

import { COLORS } from "../utils/constants";
import { H5, UnderlineSpan } from "../utils/typography";

const Footer = styled.footer`
  width: 100%;
  background-image: ${COLORS.primaryGradient};

  display: flex;
  justify-content: center;

  padding: 1.8rem 0;
`;

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <nav>
          <Navbar />
        </nav>
        <main>{children}</main>
        <Footer>
          <H5>
            Made with &#10084; by{" "}
            <UnderlineSpan
              href="https://github.com/demic-dev"
              target="_blank"
              rel="noreferrer"
            >
              demic.dev
            </UnderlineSpan>
          </H5>
        </Footer>
      </div>
    </>
  );
};

export default Layout;
