import React from "react";
import styled from "styled-components";

import { COLORS } from "./constants";

type ColorType = {
  color?: string;
};

export const H1 = styled.h1<ColorType>`
  font-size: 36px;
  font-weight: 700;

  line-height: 140%;
  color: ${({ color }) => color ?? COLORS.grayFirst};

  @media(min-width: 1000px) {
    font-size: 48px;
  }
`;

export const H2 = styled.h2<ColorType>`
  font-size: 28px;
  font-weight: 700;

  line-height: 140%;
  color: ${({ color }) => color ?? COLORS.grayFirst};

  @media(min-width: 1000px) {
    font-size: 36px;
  }
`;

export const H3 = styled.h3<ColorType>`
  font-size:18px;
  font-weight: 700;

  line-height: 140%;
  color: ${({ color }) => color ?? COLORS.grayFirst};

  @media(min-width: 1000px) {
    font-size: 24px;
  }
`;

export const H4 = styled.h4<ColorType>`
  font-size: 18px;
  font-weight: 600;

  line-height: 140%;
  color: ${({ color }) => color ?? COLORS.grayFirst};

  @media(min-width: 1000px) {
    font-size: 24px;
  }
`;

export const H5 = styled.h5<ColorType>`
  font-size: 14px;
  font-weight: 700;

  line-height: 140%;
  color: ${({ color }) => color ?? COLORS.grayFirst};

  @media(min-width: 1000px) {
    font-size: 16px;
  }
`;

export const BodyText = styled.div<ColorType>`
  font-size: 14px;
  font-weight: 400;

  line-height: 140%;
  color: ${({ color }) => color ?? COLORS.grayFirst};

  @media(min-width: 1000px) {
    font-size: 16px;
  }
`;

export const CaptionText = styled.div<ColorType>`
  font-size: 12px;
  font-weight: 400;

  line-height: 140%;
  color: ${({ color }) => color ?? COLORS.grayFirst};

  @media(min-width: 1000px) {
    font-size: 14px;
  }
`;

export const SmallText = styled.div<ColorType>`
  font-size: 9px;
  font-weight: 400;

  line-height: 140%;
  color: ${({ color }) => color ?? COLORS.grayFirst};

  @media(min-width: 1000px) {
    font-size: 12px;
  }
`;

export const UnderlineSpan = styled.a`
  text-decoration: underline;
  cursor: pointer;
  font-weight: 500;

  color: inherit;
`;
