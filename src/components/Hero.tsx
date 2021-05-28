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

import ipad from "../images/ipad.png";
import laptop from "../images/laptop.png";
import phone from "../images/phone.png";
import TextInput from "./TextInput";

const Wrapper = styled.section`
  width: 90%;
  margin: 0 auto;

  padding: 200px 0;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftHero = styled.div`
  width: 45%;
  position: relative;
`;

const LeftHeroWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: -10px;
  z-index: 2;

  width: 100%;
  height: 100%;

  background-color: #fff;
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
  width: 45%;
`;

const DevicesContainer = styled(motion.div)`
  position: relative;
  height: 322px;
  width: 466px;
  margin: 0 auto;
  z-index: -1;

  filter: drop-shadow(10px 10px 40px rgba(56, 249, 215, 0.25));

  #tablet,
  #laptop,
  #phone {
    background-size: contain;
    position: absolute;
  }

  #tablet {
    background-image: url(${ipad});
    width: 256px;
    height: 192px;

    left: 40.51%;
    bottom: 30.31%;
    transform: rotate(30deg);
  }

  #laptop {
    background-image: url(${laptop});
    width: 372px;
    height: 279px;

    left: 1.71%;
    top: 13.35%;
  }

  #phone {
    background-image: url(${phone});
    height: 117px;
    width: 156px;

    right: 66.58%;
    top: 39.94%;
    transform: rotate(-30deg);
  }
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
            animate={{ y: -window.innerHeight }}
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
          >
            <div id="laptop" />
            <div id="tablet" />
            <div id="phone" />
          </DevicesContainer>
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
        </RightHero>
      </Container>
    </Wrapper>
  );
};

export default Hero;
