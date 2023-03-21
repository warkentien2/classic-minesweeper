import React from "react";
import type { ReactElement } from "react";
import styled from "styled-components";

import { boardSize } from "./constants";
import { Tile } from "../../MinesweeperUI";

export interface BoardProps {
  size: keyof typeof boardSize;
}

const BoardContainer = styled.div<BoardProps>`
  display: inline-grid;
  grid-template-columns: repeat(${({ size }) => boardSize[size].columns}, 16px);
  grid-template-rows: repeat(${({ size }) => boardSize[size].rows}, 16px);
  grid-gap: 0;
  border: 2px inset var(--tile-bg-highlight);
  box-sizing: content-box;
`;

export const Board = ({ size = "small" }: BoardProps): ReactElement => {
  return (
    <BoardContainer size={size}>
      {new Array(boardSize[size].columns * boardSize[size].rows)
        .fill("")
        .map((_, i) => (
          <Tile key={i} />
        ))}
    </BoardContainer>
  );
};
