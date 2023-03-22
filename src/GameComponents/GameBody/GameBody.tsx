import React from "react";
import type { ReactElement } from "react";
import styled from "styled-components";

import { Board } from "../../MinesweeperUI";
import { GameHeader } from "../../GameComponents";

export interface GameBodyProps {
  size?: "small" | "medium" | "large";
}

const GameBodyContainer = styled.section<GameBodyProps>`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  background-color: var(--tile-bg);
  border: 2px outset var(--tile-bg-highlight);
  box-sizing: content-box;
  padding: 6px;

  .minesweeper-header {
    margin-bottom: 6px;
  }
`;

export const GameBody = ({ size = "small" }: GameBodyProps): ReactElement => {
  return (
    <GameBodyContainer className="minesweeper-body">
      <GameHeader />
      <Board size={size} />
    </GameBodyContainer>
  );
};
