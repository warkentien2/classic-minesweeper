import React, { useContext, useLayoutEffect, useRef } from "react";
import type { ReactElement } from "react";
import styled, { css } from "styled-components";

import { Board } from "../../MinesweeperUI";
import {
  GameHeader,
  GameMenu,
  ControlsSettings,
  DisplaySettings,
  ExportSettings,
  GameSettings,
  ImportSettings,
} from "../../Components";
import { GameContext } from "../../engine";
import type { GameStateType } from "../../engine/types";

const GameContainer = styled.section`
  position: relative;
  display: inline-block;

  .minesweeper-body {
    position: relative;
  }

  .minesweeper-modal {
    position: absolute;
    top: 10px;
    left: 8px;
  }
`;

const ZoomTarget = styled.div`
  position: relative;
`;

interface GameBodyContainerProps {
  zoom: number;
  dimension: {
    width: number;
    height: number;
  };
}

const GameBodyContainer = styled.section<GameBodyContainerProps>`
  position: relative;

  ${({ zoom, dimension }) => {
    if (dimension.width && dimension.height) {
      return css`
        width: ${(dimension.width * zoom) / 100}px;
        height: ${(dimension.height * zoom) / 100}px;
      `;
    }
  }}

  ${ZoomTarget} {
    transform-origin: 0 0;
    transform: scale(${({ zoom }) => zoom / 100});
    background: rgba(255, 0, 0, 0.25);
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    background-color: var(--tile-bg);
    border: 2px outset var(--tile-bg-highlight);
    box-sizing: border-box;
    padding: 6px;
    box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.625);
  }

  .minesweeper-modal {
    transform-origin: 0 0;
    transform: scale(${({ zoom }) => 100 / zoom});
  }

  .minesweeper-header {
    margin-bottom: 6px;
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

export const Game = (): ReactElement => {
  const [settings, setSettings] = React.useState("");
  const [gameStore, setGameStore] = React.useState<GameStateType>(
    useContext(GameContext).gameStore
  );
  const gameRef = useRef<HTMLDivElement>(null);
  const [gameDimension, setGameDimension] = React.useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });

  const onClose = () => setSettings("");

  const onOpen = (settings: string) => setSettings(settings);

  // only runs once per board size (difficulty)
  useLayoutEffect(() => {
    const game = gameRef.current;
    if (game) {
      const { width, height } = game.getBoundingClientRect();
      setGameDimension({
        width: Math.round(width),
        height: Math.round(height),
      });
    }
  }, [gameRef, gameStore.difficulty]);

  return (
    <GameContext.Provider value={{ gameStore, setGameStore }}>
      <GameContainer className="minesweeper-game">
        <GameMenu onOpen={onOpen} />
        <GameBodyContainer
          className="minesweeper-body"
          dimension={gameDimension}
          zoom={gameStore.zoom}
        >
          <ZoomTarget ref={gameRef}>
            <GameHeader />
            <div className="minesweeper-body">
              {settings && renderSettings(settings, onClose)}
              <Board size={gameStore.difficulty} tiles={gameStore.board} />
            </div>
          </ZoomTarget>
        </GameBodyContainer>
      </GameContainer>
    </GameContext.Provider>
  );
};
