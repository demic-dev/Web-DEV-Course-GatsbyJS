import React from "react";
import styled from "styled-components";

import { COLORS } from "../utils/constants";

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr;
  gap: 1rem;

  border-radius: 8px;
  padding: 0.4rem 0.45rem 0.4rem 1rem;
  border: 1px solid ${COLORS.grayFifth};
  font-size: 0.8rem;
  background-color: #fff;
`;

const Input = styled.input`
  border: none;
  color: ${COLORS.grayThird};

  &::placeholder {
    color: ${COLORS.grayFourth};
  }
`;

const Button = styled.button`
  border: none;
  background-image: ${COLORS.primaryGradient};
  border-radius: 8px;

  padding: 0.45rem 3.3rem;

  color: ${COLORS.grayFirst};
  font-weight: 700;
  font-size: 1rem;

  cursor: pointer;

  transition: 0.3s ease-in-out;
  &:hover {
    transform: translateX(3px);
  }
`;

const TextInput = () => {
  return (
    <InputContainer>
      <Input placeholder="Email address" />
      <Button>Join</Button>
    </InputContainer>
  );
};

export default TextInput;
