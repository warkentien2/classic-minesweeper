import React from "react";
import type { ReactElement } from "react";
import styled from "styled-components";

import { Clock, Tile } from "../../MinesweeperUI";

export interface GameHeaderProps {}

const Header = styled.header<GameHeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--tile-bg);
  border: 2px inset var(--tile-bg-highlight);
  box-sizing: content-box;

  .minesweeper-clock {
    margin: 4px 6px 5px 6px;
  }

  .minesweeper-tile {
    margin: 3px 0;
  }
`;

export const GameHeader = ({}: GameHeaderProps): ReactElement => {
  return (
    <Header>
      <Clock />
      <Tile value="happy" />
      <Clock />
    </Header>
  );
};
