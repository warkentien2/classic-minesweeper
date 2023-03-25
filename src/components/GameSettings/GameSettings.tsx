import React, { useContext } from "react";
import type { ReactElement } from "react";

import { Modal } from "../../MinesweeperUI";
import { useInput } from "../../hooks";
import { GameContext, generateBoard } from "../../engine";

export interface GameSettingsProps {
  onClose: () => void;
}

export const GameSettings = ({ onClose }: GameSettingsProps): ReactElement => {
  const { gameStore, setGameStore } = useContext(GameContext);
  const [difficulty, onChangeDifficulty] = useInput(gameStore.difficulty);
  const [shouldShowQuestionMarks, onChangeShouldUseQuestionMark] = useInput(
    gameStore.shouldShowQuestionMarks
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newStore = {
      ...gameStore,
      difficulty,
      shouldShowQuestionMarks,
      board: generateBoard(difficulty),
    };
    setGameStore(newStore);
    onClose();
  };

  return (
    <Modal title="Game" onClose={onClose} width={254} onSubmit={handleSubmit}>
      <table className="tr-reverse-zebra">
        <thead className="flex-row-center">
          <td tabIndex={-1} className="width-50"></td>
          <td className="width-16">Height</td>
          <td className="width-16">Width</td>
          <td className="width-16">Mines</td>
        </thead>
        <tbody className="tr-base">
          <tr className="flex-row-center">
            <th className="width-50">
              <label>
                <input
                  type="radio"
                  id="difficulty-beginner"
                  name="difficulty"
                  value="beginner"
                  checked={difficulty === "beginner"}
                  onChange={onChangeDifficulty}
                />
                Beginner
              </label>
            </th>
            <td className="width-16">9</td>
            <td className="width-16">9</td>
            <td className="width-16">10</td>
          </tr>
          <tr className="flex-row-center">
            <th className="width-50">
              <label>
                <input
                  type="radio"
                  id="difficulty-intermediate"
                  name="difficulty"
                  value="intermediate"
                  checked={difficulty === "intermediate"}
                  onChange={onChangeDifficulty}
                />
                Intermediate
              </label>
            </th>
            <td className="width-16">16</td>
            <td className="width-16">16</td>
            <td className="width-16">40</td>
          </tr>
          <tr className="flex-row-center">
            <th className="width-50">
              <label>
                <input
                  type="radio"
                  id="difficulty-expert"
                  name="difficulty"
                  value="expert"
                  checked={difficulty === "expert"}
                  onChange={onChangeDifficulty}
                />
                Expert
              </label>
            </th>
            <td className="width-16">16</td>
            <td className="width-16">30</td>
            <td className="width-16">99</td>
          </tr>
        </tbody>
        <tr className="flex-row-center">
          <td className="width-50">
            <button type="submit">New Game</button>
          </td>
          <td>
            <label>
              <input
                type="checkbox"
                id="shouldShowQuestionMark"
                name="shouldShowQuestionMark"
                value={shouldShowQuestionMarks.toString()}
                checked={shouldShowQuestionMarks}
                onChange={onChangeShouldUseQuestionMark}
              />
              Marks (?)
            </label>
          </td>
        </tr>
      </table>
    </Modal>
  );
};
