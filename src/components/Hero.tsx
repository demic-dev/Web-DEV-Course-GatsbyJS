import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FiMail } from "@react-icons/all-files/fi/FiMail";
import { MdDevices } from "@react-icons/all-files/md/MdDevices";
import { BsCodeSlash } from "@react-icons/all-files/bs/BsCodeSlash";

import { COLORS } from "../utils/constants";
import {
  H1,
  H4,
  CaptionText,
  SmallText,
  UnderlineSpan,
} from "../utils/typography";

import devices from "../images/devices.svg";
import TextInput from "./TextInput";

const windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

const Wrapper = styled.section`
  width: 90%;
  margin: 0 auto;

  padding: 8rem 0;
`;

const Container = styled.div`
  display: grid;

  align-items: center;
  justify-content: center;

  row-gap: 90px;
  
  @media(min-width: 1000px) {
    grid-template-columns: repeat(2, 45%);
    justify-content: space-between;
  }
`;

const LeftHero = styled.div`
  position: relative;
`;

const LeftHeroWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: -10px;
  z-index: 2;

  width: 100%;
  height: 100%;

  background-color: white;
`;

const RectSpan = styled.span`
  display: inline-block;
  padding: 0.4rem 0.2rem;

  border-radius: 2px;
  color: #fff;
  background-image: ${COLORS.primaryGradient};

  transform: skewX(-8deg);
  transition: 0.3s ease-out;
  &:hover {
    transform: skewX(-8deg) scale(1.1) rotate(1deg);
  }
`;

const RightHero = styled.div`
  width: 100%;
`;

const DevicesContainer = styled(motion.img)`
  width: 90%;
  height: auto;

  max-width: 100%;

  @media (min-width: 1000px) {
    margin: 0 -4rem -4rem auto;
  }

  filter: drop-shadow(10px 10px 40px rgba(56, 249, 215, 0.25));
`;

const CTAInput = styled(motion.div)`
  padding: 1rem 1.4rem;
  border-radius: 16px;
  box-shadow: -10px -10px 40px rgba(210, 210, 210, 0.25);
`;

const FeaturesWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 2rem;
`;

const FeatureContainer = styled.div`
  width: 15%;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Hero = () => {
  return (
    <Wrapper>
      <Container>
        <LeftHero>
          <LeftHeroWrapper
            initial={{ y: 0 }}
            animate={{ y: -windowHeight }}
            transition={{ duration: 1.2, ease: "easeIn" }}
          />
          <H1>
            <RectSpan>Web DEV</RectSpan> Course
          </H1>
          <H4 color={COLORS.graySecond}>
            Learn web development. Free. Directly from your inbox.
          </H4>
          <CaptionText color={COLORS.graySecond}>
            Become a web developer in 10 weeks. Code real world projects and get
            hired by companies.
          </CaptionText>
          <FeaturesWrapper>
            <FeatureContainer>
              <FiMail color={COLORS.grayFirst} size={30} />
              <CaptionText>Two emails a week</CaptionText>
            </FeatureContainer>
            <FeatureContainer>
              <BsCodeSlash color={COLORS.grayFirst} size={30} />
              <CaptionText>Code snippets</CaptionText>
            </FeatureContainer>
            <FeatureContainer>
              <MdDevices color={COLORS.grayFirst} size={30} />
              <CaptionText>Responsive websites</CaptionText>
            </FeatureContainer>
          </FeaturesWrapper>
        </LeftHero>
        <RightHero>
          <DevicesContainer
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            src={devices}
            alt="Devices"
          />

            <CTAInput
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeIn" }}
            >
              <CaptionText color={COLORS.graySecond} style={{ marginBottom: 18 }}>
                Join with 3000+ other aspiring developers!
              </CaptionText>
              <TextInput />
              <SmallText
                color={COLORS.grayThird}
                style={{ textAlign: "center", marginTop: 8 }}
              >
                By proceding, you accept the{" "}
                <UnderlineSpan href="#">terms and conditions</UnderlineSpan>.
              </SmallText>
            </CTAInput>
          {/* 
          */}
        </RightHero>
      </Container>
    </Wrapper>
  );
};

export default Hero;
