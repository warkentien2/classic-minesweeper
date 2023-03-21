import React from "react";
import type { ReactElement } from "react";
import styled from "styled-components";

import spritesheet from "../../assets/spritesheet.png";
import { tileValue } from "./constants";

export interface TileProps {
  value?: keyof typeof tileValue | undefined;
  onClick?: () => void;
}

const TileContainer = styled.div<TileProps>`
  --tile-size: ${({ value }) =>
    value && `var(--size-${tileValue[value].size})`};
  width: var(--tile-size);
  height: var(--tile-size);
  background: var(--tile-bg);
  background-size: 144px 81px;
  background-position: ${({ value }) => value && tileValue[value].position};
  background-image: url(${spritesheet});
  border: 2px outset var(--tile-bg-highlight);
  transform-origin: 0 0;
  cursor: pointer;
  box-sizing: border-box;

  &:active {
    border: 2px inset var(--tile-bg);
  }
`;

export const Tile = ({ value = "blank", onClick }: TileProps): ReactElement => {
  return (
    <TileContainer
      className="minesweeper-tile"
      onClick={onClick}
      value={value}
    />
  );
};
