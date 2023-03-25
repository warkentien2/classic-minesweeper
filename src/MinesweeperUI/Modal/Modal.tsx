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
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
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
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.25);
  z-index: 1000;

  header {
    background: ${({ theme }) => theme.colors.background.tertiary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme.colors.text.light};
    padding: 6px 4px;

    h2 {
      font-size: inherit;
      margin: 0;
    }

    button {
      font-weight: 600;
      font-size: 1.75rem;
      padding: 2px;
      background: transparent;
      border: none;
      color: inherit;
      cursor: pointer;
      line-height: 0;
    }
  }

  .flex-column {
    display: flex;
    flex-direction: column;
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

    tr,
    thead,
    tbody {
      padding: 3px 4px;
    }
  }

  .tr-base tr {
    background: ${({ theme }) => theme.colors.background.secondary} !important;
  }

  .tr-lines tr + tr,
  .tr-lines thead + tbody,
  .tr-lines tbody + thead {
    border-top: 1px solid ${({ theme }) => theme.colors.text.dark};
  }

  .tr-zebra tbody,
  .tr-reverse-zebra thead,
  .tr-zebra tr:nth-child(2n),
  .tr-reverse-zebra tr:nth-child(2n + 1) {
    background: rgba(0, 0, 0, 0.125);
  }

  * {
    box-sizing: border-box;
  }

  /* classes .width-10 to .width-100 (percent) */
  ${css`
    ${[10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 100]
      .map(
        (val) => `
        .width-${val} {
          width: ${val}%;
          text-align: left;
        }
      `
      )
      .join("\n")}
  `}

  .width-16 {
    width: 16.67%;
    text-align: left;
  }

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

  p {
    margin: 0;
  }

  textarea {
    margin: 4px 0;
    resize: vertical;
  }

  ul {
    padding: 0;
    margin: 0;
  }
`;

export const Modal = ({
  title = "change title",
  width = 140,
  onClose,
  children,
  onSubmit,
}: ModalProps): ReactElement => (
  <ModalContainer
    className="minesweeper-modal"
    width={width}
    onSubmit={onSubmit && onSubmit}
  >
    <header>
      <h2>{title}</h2>
      <button onClick={onClose} aria-label="close">
        ×
      </button>
    </header>
    {children}
  </ModalContainer>
);
