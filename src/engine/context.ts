import { createContext } from "react";

import { isDarkModeEnabled } from "../utils";
import { generateBoard } from "./generateBoard";
import type { TileValueType } from "../types/gameTypes";

export interface GameStateType {
  difficulty: "beginner" | "intermediate" | "expert";
  shouldShowQuestionMarks: boolean;
  zoom: 100 | 150 | 200;
  position: "center" | "left";
  nightMode: boolean;
  board: TileValueType[];
}

export interface GameContextType {
  gameStore: GameStateType;
  setGameStore: React.Dispatch<React.SetStateAction<GameStateType>>;
}

export const GameContext = createContext<GameContextType>({
  gameStore: {
    difficulty: "beginner",
    shouldShowQuestionMarks: false,
    zoom: 100,
    position: "center",
    nightMode: isDarkModeEnabled(),
    board: generateBoard("beginner"),
  },
  setGameStore: () => {},
});
