import React from "react";
import type { ReactElement } from "react";
import styled from "styled-components";

import { Counter, Tile } from "../../MinesweeperUI";

export interface GameHeaderProps {}

const Header = styled.header<GameHeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--tile-bg);
  border: 2px inset var(--tile-bg-highlight);
  box-sizing: content-box;

  .minesweeper-counter {
    margin: 4px 6px 5px 6px;
  }

  .minesweeper-tile {
    margin: 3px 0;
  }
`;

export const GameHeader = ({}: GameHeaderProps): ReactElement => {
  return (
    <Header className="minesweeper-header">
      <Counter />
      <Tile value="happy" />
      <Counter />
    </Header>
  );
};
