import React from "react";
import type { ReactElement } from "react";
import styled from "styled-components";

export interface ModalProps {
  value?: number;
}

const ModalContainer = styled.div<ModalProps>`
  display: inline-flex;
  border: 2px inset var(--tile-bg-highlight);
  box-sizing: content-box;
`;

export const Modal = ({ value = 0 }: ModalProps): ReactElement => {
  return (
    <ModalContainer className="minesweeper-modal" value={value}>
      Modal
    </ModalContainer>
  );
};
