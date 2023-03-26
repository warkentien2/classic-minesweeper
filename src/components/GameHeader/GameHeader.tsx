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
  border: 2px solid;
  border-color: var(--tile-bg-shadow) var(--tile-bg-highlight)
    var(--tile-bg-highlight) var(--tile-bg-shadow);
  box-shadow: inset var(--tile-shadow);
  box-sizing: content-box;

  .minesweeper-counter {
    margin: 5px 6px 4px 6px;
  }

  .minesweeper-tile {
    margin: 3px 0;
    border: 2px solid;
    border-color: var(--tile-bg-highlight) var(--tile-bg-shadow)
      var(--tile-bg-shadow) var(--tile-bg-highlight);
    box-shadow: var(--tile-shadow);
    outline: 1px solid var(--tile-bg-shadow);
  }
`;

export const GameHeader = ({}: GameHeaderProps): ReactElement => {
  return (
    <Header className="minesweeper-header">
      <Counter />
      <Tile value="happy" pushDeeper />
      <Counter />
    </Header>
  );
};
