import React, { ReactElement } from "react";
import { TileContainer } from "./styled";
import type { TileProps } from "./types";

export const Tile = ({
  content = "blank",
  onClick,
}: TileProps): ReactElement => {
  return <TileContainer onClick={onClick} content={content}></TileContainer>;
};
