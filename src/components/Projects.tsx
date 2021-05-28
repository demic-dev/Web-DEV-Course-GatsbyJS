import React from "react";
import styled from "styled-components";

import { BaseWrapper, CaptionContainer } from "../utils/globalComponents";
import { H1, BodyText } from "../utils/typography";
import { COLORS, PROJECTS } from "../utils/constants";

const ProjectsContainer = styled.div`
  width: 100%;
  margin-top: 5rem;
  position: relative;

  display: grid;
  grid-template-columns: repeat(${PROJECTS.length}, auto);
  gap: 3rem;
`;

const SingleProjectContainer = styled.div`
  width: 100%;
  border-radius: 4px;
  padding: 2rem;

  background-color: #fff;

  box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.1);
`;

const Line = styled.div`
  position: absolute;
  top: 50%;

  width: 135%;
  height: 0.5rem;

  border-radius: 0.25rem;
  background-image: ${COLORS.primaryGradient};

  transform: translate(-20%, -50%);

  z-index: -1;
`;

const Projects = () => {
  return (
    <BaseWrapper id="projects" name="Projects">
      <CaptionContainer>
        <BodyText color={COLORS.grayThird}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolor
          expedita, vero debitis quidem hic sequi nisi eveniet doloremque
          explicabo qui reprehenderit.
        </BodyText>
      </CaptionContainer>
      <ProjectsContainer>
        {PROJECTS.map((value, index) => (
          <SingleProjectContainer key={`__${index}`}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </SingleProjectContainer>
        ))}
        <Line />
      </ProjectsContainer>
    </BaseWrapper>
  );
};

export default Projects;
