import React from "react";
import styled from "styled-components";

import { BaseWrapper, CaptionContainer } from "../utils/globalComponents";
import { BodyText } from "../utils/typography";
import { COLORS, PROJECTS } from "../utils/constants";

import SingleProject from "./SingleProject";

const ProjectsContainer = styled.div`
  width: 60%;
  margin: 5rem auto 0 auto;
  position: relative;

  display: grid;
  
  gap: 3rem;

  @media (min-width: 1000px) {
    width: 100%;
    margin: 5rem 0 0 0;
    grid-template-columns: repeat(${PROJECTS.length}, auto);
  }
`;

const Line = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;

  height: 100%;
  width: 0.5rem;
  
  transform: translate(-50%, -20%);


  border-radius: 0.25rem;
  background-image: ${COLORS.primaryGradient};


  z-index: -1;

  @media (min-width: 1000px) {

    top: 50%;
    left: 0;

    width: 135%;
    height: 0.5rem;

    transform: translate(-20%, -50%);
  }
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
        {PROJECTS.map(({ img, name, body }, index) => (
          <SingleProject
            image={img}
            title={name}
            body={body}
            key={`__${index}`}
          />
        ))}
        <Line />
      </ProjectsContainer>
    </BaseWrapper>
  );
};

export default Projects;
