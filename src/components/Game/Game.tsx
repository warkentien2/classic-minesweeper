import React from "react";
import type { ReactElement } from "react";
import styled from "styled-components";

import { GameBody } from "..";
import { GameMenu } from "..";

export interface GameProps {}

const GameContainer = styled.section<GameProps>``;

export const Game = ({}: GameProps): ReactElement => {
  return (
    <GameContainer className="minesweeper-game">
      <GameMenu />
      <GameBody />
    </GameContainer>
  );
};
