import { tileContent } from "./constants";

export interface TileProps {
  content: keyof typeof tileContent;
  onClick?: () => void;
}
