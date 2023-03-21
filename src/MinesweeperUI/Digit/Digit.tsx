import React from "react";
import type { ReactElement } from "react";
import styled from "styled-components";

import spritesheet from "../../assets/spritesheet.png";
import { digitValue } from "./constants";

export interface DigitProps {
  value?: keyof typeof digitValue | undefined;
}

const DigitContainer = styled.div<DigitProps>`
  --digit-width: 13px;
  --digit-height: 23px;
  width: var(--digit-width);
  height: var(--digit-height);
  background: var(--digit-bg);
  background-size: 144px 81px;
  background-position: ${({ value }) => value && digitValue[value].position};
  background-image: url(${spritesheet});
  transform-origin: 0 0;
`;

export const Digit = ({ value = "0" }: DigitProps): ReactElement => {
  return <DigitContainer value={value} />;
};
