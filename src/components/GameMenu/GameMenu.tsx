import React from "react";
import type { ReactElement } from "react";
import styled from "styled-components";

import { LinkGroup, Link } from "../../MinesweeperUI";

export interface GameMenuProps {}

const GameMenuContainer = styled.menu<GameMenuProps>`
  padding: 0;
  margin: 0 0 2px 0;
`;

export const GameMenu = ({}: GameMenuProps): ReactElement => {
  return (
    <GameMenuContainer className="minesweeper-menu">
      <LinkGroup>
        <Link>Game</Link>
        <Link>Display</Link>
        <Link>Controls</Link>
        <Link>Import</Link>
        <Link>Export</Link>
      </LinkGroup>
    </GameMenuContainer>
  );
};
