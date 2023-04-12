import React from "react";
import type { ReactElement } from "react";
import styled from "styled-components";

import { boardSize } from "./constants";
import { Tile } from "../../MinesweeperUI";
import type { TileValueType } from "../../types/gameTypes";
import { inBounds } from "../../utils";
import { config } from "../../engine/gameConfig";

export interface BoardContainerProps {
  size: keyof typeof boardSize;
}

export interface BoardProps extends BoardContainerProps {
  tiles: TileValueType[];
  updateBoard: (board: TileValueType[]) => void;
}

let initialTileIndex = 0;

const BoardContainer = styled.div<BoardContainerProps>`
  position: relative;
  display: inline-grid;
  grid-template-columns: repeat(${({ size }) => boardSize[size].columns}, 16px);
  grid-template-rows: repeat(${({ size }) => boardSize[size].rows}, 16px);
  grid-gap: 1px;
  border: 2px solid;
  border-color: var(--tile-bg-shadow) var(--tile-bg-highlight)
    var(--tile-bg-highlight) var(--tile-bg-shadow);
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

const calculateStaggerDistance = (cols: number, tileIndex: number): number => {
  const initialRow = Math.floor(initialTileIndex / cols);
  const initialCol = initialTileIndex % cols;
  const row = Math.floor(tileIndex / cols);
  const col = tileIndex % cols;

  const rowDistance = Math.abs(initialRow - row);
  const colDistance = Math.abs(initialCol - col);

  return Math.max(rowDistance, colDistance);
};

const handleBlankTileClick = (
  rows: number,
  cols: number,
  tiles: TileValueType[],
  tileIndex: number
): TileValueType[] => {
  const row = Math.floor(tileIndex / cols);
  const col = tileIndex % cols;
  const validAdjacentIndexes = [
    inBounds(row - 1, rows) * cols + inBounds(col - 1, cols),
    inBounds(row - 1, rows) * cols + col,
    inBounds(row - 1, rows) * cols + inBounds(col + 1, cols),
    row * cols + inBounds(col - 1, cols),
    row * cols + inBounds(col + 1, cols),
    inBounds(row + 1, rows) * cols + inBounds(col - 1, cols),
    inBounds(row + 1, rows) * cols + col,
    inBounds(row + 1, rows) * cols + inBounds(col + 1, cols),
  ].filter((val) => val >= 0);

  tiles[tileIndex].clicked = true;

  if (tiles[tileIndex].value === "blank") {
    const adjacentBlankIndexes: number[] = [];

    validAdjacentIndexes.forEach((adjacentIndex) => {
      if (tiles[adjacentIndex].clicked === false) {
        if (tiles[adjacentIndex].value === "blank") {
          adjacentBlankIndexes.push(adjacentIndex);
        } else {
          tiles[adjacentIndex].clicked = true;
        }

        tiles[adjacentIndex].stagger = calculateStaggerDistance(
          cols,
          adjacentIndex
        );
      }
    });

    adjacentBlankIndexes.forEach((adjacentIndex) => {
      tiles = handleBlankTileClick(rows, cols, tiles, adjacentIndex);
    });
  }

  return tiles;
};

export const Board = ({
  size = "beginner",
  tiles: boardTiles,
  updateBoard,
}: BoardProps): ReactElement => {
  const { rows, cols } = config.difficulty[size];

  const handleUpdateBoard = (tileIndex: number) => {
    const tiles: TileValueType[] = JSON.parse(JSON.stringify(boardTiles));
    initialTileIndex = tileIndex;
    const newBoard: TileValueType[] = handleBlankTileClick(
      rows,
      cols,
      tiles,
      tileIndex
    );
    updateBoard(newBoard);
  };

  return (
    <BoardContainer className="minesweeper-board" size={size}>
      {boardTiles.map((tile, i) => (
        <Tile
          key={i}
          tileValue={tile.value}
          tileStagger={tile.stagger}
          onClick={
            tile.value === "blank" ? () => handleUpdateBoard(i) : undefined
          }
          {...(tile.clicked ? { clicked: true } : {})}
        />
      ))}
    </BoardContainer>
  );
};
