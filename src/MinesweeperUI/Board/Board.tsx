import React from "react";
import type { ReactElement } from "react";
import styled from "styled-components";

import { boardSize } from "./constants";
import { Tile } from "../../MinesweeperUI";

export interface BoardProps {
  size: keyof typeof boardSize;
}

const BoardContainer = styled.div<BoardProps>`
  position: relative;
  display: inline-grid;
  grid-template-columns: repeat(${({ size }) => boardSize[size].columns}, 16px);
  grid-template-rows: repeat(${({ size }) => boardSize[size].rows}, 16px);
  grid-gap: 1px;
  border: 2px inset var(--tile-bg-highlight);
  box-sizing: content-box;
  background: var(--tile-bg-shadow);

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    box-shadow: inset var(--tile-shadow);
    z-index: 5;
  }
`;

export const Board = ({ size = "small" }: BoardProps): ReactElement => {
  return (
    <BoardContainer className="minesweeper-board" size={size}>
      {new Array(boardSize[size].columns * boardSize[size].rows)
        .fill("")
        .map((_, i) => (
          <Tile
            key={i}
            className={
              i === 2 ||
              i === 25 ||
              (i > 30 && i !== 43 && i !== 48 && i !== 57)
                ? "active"
                : ""
            }
          />
        ))}
    </BoardContainer>
  );
};
