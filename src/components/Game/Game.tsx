import React from "react";
import type { ReactElement } from "react";
import styled from "styled-components";

import { Board } from "../../MinesweeperUI";
import {
  GameHeader,
  GameMenu,
  ControlsSettings,
  DisplaySettings,
  ExportSettings,
  GameSettings,
  ImportSettings,
} from "..";

export interface GameProps {
  size?: "small" | "medium" | "large";
}

const GameBodyContainer = styled.section`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  background-color: var(--tile-bg);
  border: 2px outset var(--tile-bg-highlight);
  box-sizing: content-box;
  padding: 6px;
  box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.625);

  .minesweeper-header {
    margin-bottom: 6px;
  }
`;

const GameContainer = styled.section`
  .minesweeper-body {
    position: relative;
  }

  .minesweeper-modal {
    position: absolute;
    top: 10px;
    left: 8px;
  }
`;

const renderSettings = (
  settings: string,
  onClick: () => void
): React.ReactNode => {
  switch (settings) {
    case "ControlsSettings":
      return <ControlsSettings onClose={onClick} />;
    case "DisplaySettings":
      return <DisplaySettings onClose={onClick} />;
    case "ExportSettings":
      return <ExportSettings onClose={onClick} />;
    case "GameSettings":
      return <GameSettings onClose={onClick} />;
    case "ImportSettings":
      return <ImportSettings onClose={onClick} />;
    default:
      return null;
  }
};

export const Game = ({ size = "small" }: GameProps): ReactElement => {
  const [settings, setSettings] = React.useState("");

  const onClose = () => setSettings("");

  const onOpen = (settings: string) => setSettings(settings);

  return (
    <GameContainer className="minesweeper-game">
      <GameMenu onOpen={onOpen} />
      <GameBodyContainer className="minesweeper-body">
        <GameHeader />
        <div className="minesweeper-body">
          {settings && renderSettings(settings, onClose)}
          <Board size={size} />
        </div>
      </GameBodyContainer>
    </GameContainer>
  );
};
