import { createContext } from "react";

import { isDarkModeEnabled } from "../utils";
import { generateBoard } from "./generateBoard";

export interface Context {
  difficulty: "beginner" | "intermediate" | "expert";
  shouldShowQuestionMarks: boolean;
  zoom: 100 | 150 | 200;
  position: "center" | "left";
  nightMode: boolean;
  board: string[];
}

export const Context = createContext({
  difficulty: "beginner",
  shouldShowQuestionMarks: false,
  zoom: 100,
  position: "center",
  nightMode: isDarkModeEnabled(),
  board: generateBoard("beginner"),
});
