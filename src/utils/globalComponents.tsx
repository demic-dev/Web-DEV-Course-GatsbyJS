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
  width: 70%;
  margin: 0 auto;

  padding: 150px 0;
`;

export const CaptionContainer = styled.div`
  width: 50%;
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
