import React, { useState } from "react";
import type { ReactElement } from "react";
import styled, { css } from "styled-components";
import { classNames as cn } from "../../utils";

import spritesheet from "../../assets/spritesheet.png";
import { tileValues } from "./constants";

const TileShadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--tile-bg);
  border: 2px solid;
  border-color: var(--tile-bg-highlight) var(--tile-bg-shadow)
    var(--tile-bg-shadow) var(--tile-bg-highlight);
  box-shadow: var(--tile-shadow);
  box-sizing: inherit;
  z-index: 10;
  transition: border 62.5ms ease 62.5ms, box-shadow 62.5ms ease 62.5ms,
    z-index 62.5ms ease 0s;
`;

export interface TileContainerProps {
  tileValue: keyof typeof tileValues;
  tileStagger: number;
}

const TileContainer = styled.button<TileContainerProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  background: transparent;
  background-size: 144px 81px;
  background-position: ${({ tileValue }) =>
    tileValue && tileValues[tileValue].position};
  background-image: url(${spritesheet});
  border: none;
  padding: 0;
  cursor: pointer;
  box-sizing: inherit;
  z-index: 20;
  opacity: 0;
  transition: opacity 0s ${({ tileStagger }) => tileStagger}s ease-out;

  ${({ tileValue }) =>
    tileValue !== "blank" &&
    css`
      opacity: 1;
    `}
`;

export interface TileWrapperProps {
  tileValue: keyof typeof tileValues;
  tileStagger: number;
}

const TileWrapper = styled.div<TileWrapperProps>`
  --tile-size: ${({ tileValue }) =>
    tileValue && `var(--size-${tileValues[tileValue].size})`};
  position: relative;
  width: var(--tile-size);
  height: var(--tile-size);
  box-sizing: border-box;

  &:not(.push-deeper).active
    ${TileShadow},
    .mousedown-on-tile
    &:hover
    ${TileShadow} {
    border: 2px solid var(--tile-bg);
    box-shadow: none;
    z-index: 0;
    transition: ${({ tileStagger }) =>
      css`border 0s ${tileStagger}s, box-shadow 0s ${tileStagger}s, z-index 0s ${tileStagger}s`};
  }

  &.push-deeper.active
    ${TileShadow},
    .mousedown-on-tile
    &.push-deeper:hover
    ${TileShadow} {
    border: 2px solid;
    border-color: var(--tile-bg-shadow) var(--tile-bg-highlight)
      var(--tile-bg-highlight) var(--tile-bg-shadow);
    box-shadow: none;
    z-index: 0;
    transition: ${({ tileStagger }) =>
      css`border 0s ${tileStagger}s, box-shadow 0s ${tileStagger}s, z-index 0s ${tileStagger}s`};
  }
`;

export interface TileProps {
  tileCoverValue?: keyof typeof tileValues;
  tileValue: keyof typeof tileValues;
  tileStagger?: number;
  className?: string;
  clicked?: boolean;
  onClick?: () => void;
  pushDeeper?: boolean;
  noActiveUI?: boolean;
}

const Stagger = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10000;
  color: black;
  font-weight: bolder;
  margin: 0 0 0 4px;
`;

export const Tile = ({
  tileCoverValue = "blank",
  tileValue = "blank",
  tileStagger = 0,
  className,
  clicked = false,
  onClick,
  pushDeeper = false,
  noActiveUI = false,
}: TileProps): ReactElement => {
  const [tileState, setTileState] = useState<TileProps["tileValue"]>(
    clicked ? tileValue : tileCoverValue
  );
  const [isClicked, setIsClicked] = useState(clicked);
  const staggerInterval = 0.167; // 60 fps

  React.useLayoutEffect(() => {
    if (clicked) {
      setIsClicked(true);
      setTileState(tileValue);
    }
  }, [clicked, tileValue]);

  const handleLeftClick = () => {
    if (isClicked || tileState === "flag") return;

    onClick && onClick();
    setIsClicked(true);
    setTileState(tileValue);
  };

  const handleRightClick = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (isClicked) return;

    if (tileState === "flag") {
      setTileState("blank");
    } else {
      setTileState("flag");
    }
  };

  const handleMouseDown = () => {
    document
      .querySelector(".minesweeper-game")
      ?.classList.add("mousedown-on-tile");
  };

  const handleMouseUp = () => {
    document
      .querySelector(".minesweeper-game")
      ?.classList.remove("mousedown-on-tile");
    handleLeftClick();
  };

  return (
    <TileWrapper
      tileValue={tileState}
      tileStagger={tileStagger * staggerInterval}
      className={cn(
        "minesweeper-tile",
        pushDeeper ? "push-deeper" : "",
        isClicked && !noActiveUI ? "active" : "",
        className
      )}
    >
      <TileContainer
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onClick={handleLeftClick}
        onContextMenu={handleRightClick}
        tileValue={tileState}
        tileStagger={tileStagger * staggerInterval}
      />
      <TileShadow tabIndex={-1} />
      <Stagger>{tileStagger}</Stagger>
    </TileWrapper>
  );
};
