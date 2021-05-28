import React from "react";
import styled from "styled-components";
import { COLORS } from "../utils/constants";

import TextInput from "./TextInput";

import { BaseWrapper, CaptionContainer } from "../utils/globalComponents";
import { H1, BodyText, SmallText, UnderlineSpan } from "../utils/typography";

const InputContainer = styled.div`
  margin-top: 5rem;
  filter: drop-shadow(20px 20px 40px rgba(0, 0, 0, 0.1));
`;

const FinalCTA = () => {
  return (
    <BaseWrapper name="Start learning for free" id="join">
      <CaptionContainer>
        <BodyText color={COLORS.grayThird}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolor
          expedita, vero debitis quidem hic sequi nisi eveniet doloremque
          explicabo qui reprehenderit.
        </BodyText>
      </CaptionContainer>
      <InputContainer>
        <TextInput />
        <SmallText color={COLORS.grayThird} style={{ marginTop: 8 }}>
          By proceding, you accept the{" "}
          <UnderlineSpan href="#">terms and conditions</UnderlineSpan>.
        </SmallText>
      </InputContainer>
    </BaseWrapper>
  );
};

export default FinalCTA;
