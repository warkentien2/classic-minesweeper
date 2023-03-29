import React from "react";
import type { ReactElement } from "react";
import styled from "styled-components";

import { Counter, Tile } from "../../MinesweeperUI";
import { tileValues } from "../../MinesweeperUI/Tile/constants";

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
    outline: 1px solid var(--tile-bg-shadow);
  }

  .mousedown-on-tile & .minesweeper-tile:not(:active) > *:first-child {
    background-position: ${tileValues["surprised"].position};
  }
`;

export const GameHeader = ({}: GameHeaderProps): ReactElement => {
  return (
    <Header className="minesweeper-header">
      <Counter />
      <Tile tileCoverValue="happy" tileValue="happy" pushDeeper noActiveUI />
      <Counter />
    </Header>
  );
};
