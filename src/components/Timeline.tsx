import React from "react";
import styled from "styled-components";

import { H1, BodyText, CaptionText, H5 } from "../utils/typography";
import { BaseWrapper, CaptionContainer } from "../utils/globalComponents";
import { COLORS, POINTS } from "../utils/constants";

const TimelineContainer = styled.div`
  width: 100%;
  margin-top: 8rem;
`;

const Line = styled.div`
  height: 0.5rem;
  background-color: ${COLORS.grayFirst};
  border-radius: 0.25rem;

  overflow: visible;
  position: relative;
`;

const PointContainer = styled.div<{ position: number }>`
  position: absolute;

  top: -100%;
  left: ${({ position }) => position}%;
`;

const InfoContainer = styled.div`
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
                    marginTop: 0,
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
