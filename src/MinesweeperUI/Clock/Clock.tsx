import React from "react";
import type { ReactElement } from "react";
import styled from "styled-components";

import { Digit } from "../../MinesweeperUI";
import type { DigitProps } from "../../MinesweeperUI/types";

export interface ClockProps {
  value?: number;
}

const ClockContainer = styled.div<ClockProps>`
  display: inline-flex;
  border: 2px inset var(--tile-bg-highlight);
  box-sizing: content-box;
`;

const formatValue = (value: number): DigitProps["value"][] => {
  let formattedValue = "";

  if (value > 999) return "999".split("") as DigitProps["value"][];
  if (value < -99) return "-99".split("") as DigitProps["value"][];

  if (value < 0) {
    formattedValue = "-" + Math.abs(value).toString().padStart(2, "0");
  } else {
    formattedValue = value.toString().padStart(3, "0");
  }

  return formattedValue.split("") as DigitProps["value"][];
};

export const Clock = ({ value = 0 }: ClockProps): ReactElement => {
  return (
    <ClockContainer value={value}>
      {formatValue(value).map((digit, i) => (
        <Digit key={i} value={digit} />
      ))}
    </ClockContainer>
  );
};
