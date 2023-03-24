import React from "react";
import type { ReactElement } from "react";
import styled from "styled-components";

import { LinkGroup, Link } from "../../MinesweeperUI";

export interface GameMenuProps {
  onOpen: (settings: string) => void;
}

const GameMenuContainer = styled.menu`
  padding: 0;
  margin: 0 0 2px 0;
`;

export const GameMenu = ({ onOpen }: GameMenuProps): ReactElement => {
  return (
    <GameMenuContainer className="minesweeper-menu">
      <LinkGroup>
        <Link onClick={() => onOpen("GameSettings")}>Game</Link>
        <Link onClick={() => onOpen("DisplaySettings")}>Display</Link>
        <Link onClick={() => onOpen("ControlsSettings")}>Controls</Link>
        <Link onClick={() => onOpen("ImportSettings")}>Import</Link>
        <Link onClick={() => onOpen("ExportSettings")}>Export</Link>
      </LinkGroup>
    </GameMenuContainer>
  );
};
