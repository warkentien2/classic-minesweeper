import styled from "styled-components";
import spritesheet from "../../assets/spritesheet.png";
import { tileContent } from "./constants";
import type { TileProps } from "./types";

export const TileContainer = styled.div<TileProps>`
  --size-small: 16px;
  --size-medium: 26px;
  --tile-size: ${({ content }) => `var(--size-${tileContent[content].size})`};
  --tile-bg: #bdbdbd;
  --tile-bg-highlight: #fff;
  --tile-bg-shadow: #7b7b7b;
  width: var(--tile-size);
  height: var(--tile-size);
  background: var(--tile-bg);
  background-size: 144px 81px;
  background-position: ${({ content }) => tileContent[content].position};
  background-image: url(${spritesheet});
  border: 2px outset var(--tile-bg-highlight);
  transform-origin: 0 0;
  cursor: pointer;
  box-sizing: border-box;

  &:active {
    border: 2px inset var(--tile-bg);
  }
`;
