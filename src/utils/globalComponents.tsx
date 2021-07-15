import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { H1 } from "./typography";

interface WrapperProps extends React.HTMLAttributes<HTMLElement> {
  name: string;
  id: string;
  shouldStart?: boolean;
}

const Wrapper = styled(motion.section)`
  width: 90%;
  margin: 0 auto;

  padding: 150px 0;

  @media (min-width: 1000px) {
    width: 70%;
  }
`;

export const CaptionContainer = styled.div`
  min-width: 50%;
  max-width: 75%;
`;

export const BaseWrapper: React.FC<WrapperProps> = ({ name, id, children }) => (
  <Wrapper
  // initial={{ opacity: 0 }}
  // animate={{ opacity: shouldStart ? 1 : 0 }}
  // transition={{ duration: 1.2, ease: "easeOut" }}
  >
    <H1
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, ease: "easeOut" }}
      as={motion.h1}
      id={id}
      style={{ textAlign: "center" }}
    >
      {name}
    </H1>
    {children}
  </Wrapper>
);
