import React from "react";
import type { ReactElement } from "react";
import styled from "styled-components";

import { Digit } from "..";
import type { DigitProps } from "../types";

export interface CounterProps {
  value?: number;
}

const CounterContainer = styled.div<CounterProps>`
  display: inline-flex;
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

export const Counter = ({ value = 0 }: CounterProps): ReactElement => {
  return (
    <CounterContainer className="minesweeper-counter" value={value}>
      {formatValue(value).map((digit, i) => (
        <Digit key={i} value={digit} />
      ))}
    </CounterContainer>
  );
};
