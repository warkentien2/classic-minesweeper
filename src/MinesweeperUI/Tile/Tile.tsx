import React from "react";
import type { ReactElement } from "react";
import styled from "styled-components";
import { classNames as cn } from "../../utils";

import spritesheet from "../../assets/spritesheet.png";
import { tileValue } from "./constants";

export interface TileProps {
  value?: keyof typeof tileValue | undefined;
  className?: string;
  onClick?: () => void;
  pushDeeper?: boolean;
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
  box-shadow: var(--tile-shadow);
  box-sizing: border-box;
  z-index: 10;

  &:not(.push-deeper):active,
  &:not(.push-deeper).active {
    border: 2px solid var(--tile-bg);
    box-shadow: none;
    z-index: 0;
  }

  &.push-deeper:active,
  &.push-deeper.active {
    border: 2px inset var(--tile-bg);
    box-shadow: none;
  }
`;

export const Tile = ({
  value = "blank",
  className,
  onClick,
  pushDeeper,
}: TileProps): ReactElement => {
  return (
    <TileContainer
      className={cn(
        "minesweeper-tile",
        pushDeeper ? "push-deeper" : "",
        className
      )}
      onClick={onClick}
      value={value}
    />
  );
};
