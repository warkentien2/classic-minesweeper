import { scramble } from "../utils";
import { config } from "./gameConfig";
import { TileValueType } from "../types/gameTypes";

const numberToWord = (num: number): TileValueType => {
  switch (num) {
    case 1:
      return "one";
    case 2:
      return "two";
    case 3:
      return "three";
    case 4:
      return "four";
    case 5:
      return "five";
    case 6:
      return "six";
    case 7:
      return "seven";
    default:
      return "eight";
  }
};

const createBlankBoardWithBombs = (
  difficulty: "beginner" | "intermediate" | "expert"
): TileValueType[] => {
  const { rows, cols, mines } = config.difficulty[difficulty];

  return scramble(
    new Array(mines).fill("mine"),
    new Array(rows * cols - mines).fill("blank")
  );
};

const placeAdjacentNumbers = (
  board: TileValueType[],
  difficulty: "beginner" | "intermediate" | "expert"
): TileValueType[] => {
  const { rows, cols } = config.difficulty[difficulty];

  return board.map((tile, i): TileValueType => {
    if (tile === "mine") return "mine";

    const row = Math.floor(i / cols);
    const col = i % cols;

    const adjacentTiles = [
      board[(row - 1) * cols + (col - 1)],
      board[(row - 1) * cols + col],
      board[(row - 1) * cols + (col + 1)],
      board[row * cols + (col - 1)],
      board[row * cols + (col + 1)],
      board[(row + 1) * cols + (col - 1)],
      board[(row + 1) * cols + col],
      board[(row + 1) * cols + (col + 1)],
    ];

    const adjacentMines = adjacentTiles.filter(
      (tile) => tile === "mine"
    ).length;

    return adjacentMines === 0 ? "blank" : numberToWord(adjacentMines);
  });
};

export const generateBoard = (
  difficulty: "beginner" | "intermediate" | "expert"
): TileValueType[] => {
  const board = createBlankBoardWithBombs(difficulty);
  return placeAdjacentNumbers(board, difficulty);
};
