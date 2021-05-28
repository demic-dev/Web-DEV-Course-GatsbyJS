import React from "react";
import styled from "styled-components";

import backgroundStroke from "../images/backgroundStroke.png";

import { BodyText, H4 } from "../utils/typography";
import { COLORS, SECTIONS } from "../utils/constants";
import { BaseWrapper } from "../utils/globalComponents";

const Wrapper = styled(BaseWrapper)`
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 20%;
    right: -65%;
    z-index: -1;

    background-image: url(${backgroundStroke});
    background-repeat: no-repeat;
    background-size: 80%;
  }
`;

const SectionsContainer = styled.div`
  margin-top: 8rem;

  padding: 2.4rem;

  border-radius: 8px;
  background-color: #fff;
  box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.1);

  display: grid;
  grid-template-columns: repeat(2, auto);
  column-gap: 1rem;
  row-gap: 2rem;
`;

const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: 50% auto;
  align-items: center;
`;

const IconTitleContainer = styled.div`
  display: grid;
  justify-items: center;
  text-align: center;
`;

const CourseSections = () => {
  return (
    <Wrapper id="sections" name="What you will learn">
      <SectionsContainer>
        {SECTIONS.map(({ name, icon, text }, index) => (
          <SectionContainer key={`${name}__${index}`}>
            <IconTitleContainer>
              {icon({
                color: COLORS.grayFirst,
                size: 48,
                style: { marginBottom: "-2rem" },
              })}
              <H4>{name}</H4>
            </IconTitleContainer>
            <BodyText>{text}</BodyText>
          </SectionContainer>
        ))}
      </SectionsContainer>
    </Wrapper>
  );
};

export default CourseSections;
