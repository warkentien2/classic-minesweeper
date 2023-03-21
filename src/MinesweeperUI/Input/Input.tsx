import React from "react";
import type { ReactElement } from "react";
import styled from "styled-components";

export interface InputProps {
  value?: number;
}

const InputContainer = styled.div<InputProps>`
  display: inline-flex;
  border: 2px inset var(--tile-bg-highlight);
  box-sizing: content-box;
`;

export const Input = ({ value = 0 }: InputProps): ReactElement => {
  return (
    <InputContainer className="minesweeper-input" value={value}>
      Input
    </InputContainer>
  );
};
