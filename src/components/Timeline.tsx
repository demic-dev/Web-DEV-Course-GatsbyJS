import React from "react";
import styled from "styled-components";

import { H1, BodyText, CaptionText, H5 } from "../utils/typography";
import { BaseWrapper, CaptionContainer } from "../utils/globalComponents";
import { COLORS, POINTS } from "../utils/constants";

const TimelineContainer = styled.div`
  width: 90%;
  margin: 8rem auto 0 auto;

  @media (min-width: 1000px) {
    width: 70%;
  }
`;

const Line = styled.div`
  width: 0.5rem;
  height: 300px;

  background-color: ${COLORS.grayFirst};
  border-radius: 0.25rem;

  overflow: visible;
  position: relative;

  @media (min-width: 700px) {
    height: 0.5rem;
    width: auto;
  }
`;

const PointContainer = styled.div<{ position: number }>`
  position: absolute;

  left: 50%;
  top: ${({ position }) => position - 4}%;

  @media (min-width: 700px) {
    top: -100%;
    left: ${({ position }) => position}%;
  }
`;

const InfoContainer = styled.div`
  transform: translateY(-65%);

  display: flex;
  
  align-items: center;
  
  margin-left: 1rem;
  /* min-width: 250px; */

  * {
    min-width: 7rem;
    text-align: center;
  }

  h5 {
    min-width: 200px;
    margin-left: 0.6rem;
  }
  
  @media (min-width: 700px) {
    flex-direction: column;
    transform: translate(-50%);
    
    justify-content: center;
    min-width: 0;

    margin-left: 0;
    h5 {
      margin-left: 0;
      margin-top: 0.2rem;
    }

    * {
      min-width: 0;
    }
  }
`;

const LinePoint = styled.div`
  transform: translateX(-50%);

  width: 24px;
  height: 24px;
  border-radius: 12px;
  background-image: ${COLORS.primaryGradient};

  transition: 0.1s ease-in-out;
  &:hover {
    transform: scale(1.2) translateX(-40%);
  }
`;

const Timeline = () => {
  return (
    <BaseWrapper id="timeline" name="Timeline">
      <CaptionContainer>
        <BodyText color={COLORS.grayThird}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolor
          expedita, vero debitis quidem hic sequi nisi eveniet doloremque
          explicabo qui reprehenderit.
        </BodyText>
      </CaptionContainer>
      <TimelineContainer>
        <Line>
          {POINTS.map((point, index) => (
            <PointContainer
              key={`${point.heading}__${index}`}
              position={point.position}
            >
              <LinePoint />
              <InfoContainer>
                <CaptionText>{point.subHeading}</CaptionText>
                <H5
                  style={{
                    maxWidth: "60%",
                    textAlign: "center",
                  }}
                >
                  {point.heading}
                </H5>
              </InfoContainer>
            </PointContainer>
          ))}
        </Line>
      </TimelineContainer>
    </BaseWrapper>
  );
};

export default Timeline;
