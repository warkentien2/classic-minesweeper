import React from "react";
import type { ReactElement } from "react";
import styled, { css } from "styled-components";

interface ModalContainerProps {
  width: number;
}

export interface ModalProps extends ModalContainerProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalContainer = styled.form<ModalContainerProps>`
  display: inline-flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.text.dark};
  box-sizing: content-box;
  background: ${({ theme }) => theme.colors.background.secondary};
  width: ${({ width }) => width}px;
  text-transform: capitalize;
  border-radius: 2px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);

  header {
    background: ${({ theme }) => theme.colors.background.tertiary};
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.text.light};
    padding: 4px;

    h2 {
      font-size: inherit;
    }

    button {
      font-weight: 600;
      font-size: 1.75rem;
      padding: 2px;
      background: transparent;
      border: none;
      color: inherit;
      cursor: pointer;
    }
  }

  .flex-row-center {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
  }

  .flex-column-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }

  table {
    border-spacing: 0;
  }

  tr {
    padding: 4px 6px;
  }

  tr + tr {
    border-top: 1px solid ${({ theme }) => theme.colors.text.dark};
  }

  * {
    box-sizing: border-box;
  }

  /* classes .width-10 to .width-100 (percent) */
  ${css`
    ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      .map(
        (val) => `
        .width-${val * 10} {
          width: ${val * 10}%;
          text-align: left;
        }
      `
      )
      .join("\n")}
  `}

  .width-33 {
    width: 33.33%;
    text-align: left;
  }

  .width-66 {
    width: 66.67%;
    text-align: left;
  }

  label {
    display: inline-flex;
    align-items: middle;
    line-height: 1.5rem;
  }

  input {
    margin: 0 4px;
  }
`;

export const Modal = ({
  title = "change title",
  width = 140,
  onClose,
  children,
}: ModalProps): ReactElement => (
  <ModalContainer className="minesweeper-modal" width={width}>
    <header>
      <h2>{title}</h2>
      <button onClick={onClose} aria-label="close">
        ×
      </button>
    </header>
    {children}
  </ModalContainer>
);
