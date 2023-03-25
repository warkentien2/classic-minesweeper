import React from "react";
import type { ReactElement } from "react";
import styled from "styled-components";

import { boardSize } from "./constants";
import { Tile } from "../../MinesweeperUI";
import type { TileProps } from "../../MinesweeperUI/types";

export interface BoardContainerProps {
  size: keyof typeof boardSize;
}

export interface BoardProps extends BoardContainerProps {
  tiles: TileProps["value"][];
}

const BoardContainer = styled.div<BoardContainerProps>`
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

export const Board = ({ size = "small", tiles }: BoardProps): ReactElement => {
  return (
    <BoardContainer className="minesweeper-board" size={size}>
      {tiles.map((tile, i) => (
        <Tile key={i} value={tile} />
      ))}
    </BoardContainer>
  );
};
