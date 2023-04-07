import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
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
import { useFirstRender, useTimer } from "../../hooks";
import type { TileValueType } from "../../types/gameTypes";

interface GameContainerProps {
  position: string;
}

const GameContainer = styled.section<GameContainerProps>`
  position: relative;
  display: flex;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: flex-start;
  align-items: ${({ position }) =>
    position === "center" ? `center;` : `flex-start`};

  .minesweeper-body {
    position: relative;
  }
`;

const ZoomTarget = styled.div`
  position: relative;
`;

interface GameBodyContainerProps {
  dimension: {
    width: number;
    height: number;
  };
  position: string;
  zoom: number;
}

const GameBodyContainer = styled.section<GameBodyContainerProps>`
  position: relative;
  display: inline-block;

  ${({ dimension }) => {
    if (dimension.width && dimension.height) {
      return css`
        width: ${dimension.width}px;
        height: ${dimension.height}px;
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
    border: 2px solid;
    border-color: var(--tile-bg-highlight) var(--tile-bg-shadow)
      var(--tile-bg-shadow) var(--tile-bg-highlight);
    box-sizing: border-box;
    padding: 6px;
    box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.625);
  }

  .minesweeper-modal {
    position: absolute;
    top: 10px;
    transform-origin: 0 0;
    transform: ${({ position, zoom }) =>
      position === "center"
        ? `scale(${100 / zoom}) translateX(-50%)`
        : `scale(${100 / zoom})`};
    left: ${({ position }) => (position === "center" ? `50%` : `8px`)};
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

export interface GameProps {
  toggleTheme: () => void;
}

const getNumberOfBombs = (difficulty: string) => {
  switch (difficulty) {
    case "beginner":
      return 10;
    case "intermediate":
      return 40;
    case "expert":
      return 99;
    default:
      return 10;
  }
};

export const Game = ({ toggleTheme }: GameProps): ReactElement => {
  const [settings, setSettings] = React.useState("");
  const [gameStore, setGameStore] = React.useState<GameStateType>(
    useContext(GameContext).gameStore
  );
  const firstRender = useFirstRender();
  const gameRef = useRef<HTMLDivElement>(null);
  const [gameDimension, setGameDimension] = React.useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });
  const timer = useTimer(0);
  const [bombsLeft, setBombsLeft] = useState(
    getNumberOfBombs(gameStore.difficulty)
  );

  const onClose = () => setSettings("");

  const onOpen = (settings: string) => setSettings(settings);

  const updateBoard = (board: TileValueType[]): void => {
    setGameStore((prevState) => ({
      ...prevState,
      board,
    }));
  };

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
  }, [gameRef, gameStore.difficulty, gameStore.zoom]);

  useEffect(() => {
    if (!firstRender) {
      toggleTheme();
    }
  }, [gameStore.nightMode]);

  useEffect(() => {
    // timer should only start on first tile click
    timer.play();
  }, []);

  return (
    <GameContext.Provider value={{ gameStore, setGameStore }}>
      {createPortal(
        <div className="dark-mode-aware-backdrop" />,
        document.body
      )}
      <GameContainer className="minesweeper-game" position={gameStore.position}>
        <GameMenu onOpen={onOpen} />
        <GameBodyContainer
          className="minesweeper-body"
          dimension={gameDimension}
          zoom={gameStore.zoom}
          position={gameStore.position}
        >
          <ZoomTarget ref={gameRef}>
            <GameHeader clockValue={timer.value} bombCounterValue={bombsLeft} />
            <div className="minesweeper-body">
              {settings && renderSettings(settings, onClose)}
              <Board
                size={gameStore.difficulty}
                tiles={gameStore.board}
                updateBoard={updateBoard}
              />
            </div>
          </ZoomTarget>
        </GameBodyContainer>
      </GameContainer>
    </GameContext.Provider>
  );
};
