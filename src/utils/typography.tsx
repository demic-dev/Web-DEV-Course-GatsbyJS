import React from "react";
import styled from "styled-components";

import { COLORS } from "./constants";

type ColorType = {
  color?: string;
};

export const H1 = styled.h1<ColorType>`
  font-size: 48px;
  font-weight: 700;

  line-height: 140%;
  color: ${({ color }) => color ?? COLORS.grayFirst};
`;

export const H2 = styled.h2<ColorType>`
  font-size: 36px;
  font-weight: 700;

  line-height: 140%;
  color: ${({ color }) => color ?? COLORS.grayFirst};
`;

export const H3 = styled.h3<ColorType>`
  font-size: 24px;
  font-weight: 700;

  line-height: 140%;
  color: ${({ color }) => color ?? COLORS.grayFirst};
`;

export const H4 = styled.h4<ColorType>`
  font-size: 24px;
  font-weight: 600;

  line-height: 140%;
  color: ${({ color }) => color ?? COLORS.grayFirst};
`;

export const H5 = styled.h5<ColorType>`
  font-size: 16px;
  font-weight: 700;

  line-height: 140%;
  color: ${({ color }) => color ?? COLORS.grayFirst};
`;

export const BodyText = styled.div<ColorType>`
  font-size: 16px;
  font-weight: 400;

  line-height: 140%;
  color: ${({ color }) => color ?? COLORS.grayFirst};
`;

export const CaptionText = styled.div<ColorType>`
  font-size: 14px;
  font-weight: 400;

  line-height: 140%;
  color: ${({ color }) => color ?? COLORS.grayFirst};
`;

export const SmallText = styled.div<ColorType>`
  font-size: 12px;
  font-weight: 400;

  line-height: 140%;
  color: ${({ color }) => color ?? COLORS.grayFirst};
`;

export const UnderlineSpan = styled.a`
  text-decoration: underline;
  cursor: pointer;
  font-weight: 500;

  color: inherit;
`;
