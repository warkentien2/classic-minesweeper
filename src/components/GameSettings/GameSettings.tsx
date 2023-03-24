import React from "react";
import type { ReactElement } from "react";

import { Modal } from "../../MinesweeperUI";
import { useInput } from "../../hooks";

export interface GameSettingsProps {
  state: {
    difficulty: string;
    shouldUseQuestionMark: boolean;
  };
  setState: () => void;
  onClose: () => void;
}

export const GameSettings = ({
  state,
  setState,
  onClose,
}: GameSettingsProps): ReactElement => {
  const [difficulty, onChangeDifficulty] = useInput(state.difficulty);
  const [shouldUseQuestionMark, onChangeShouldUseQuestionMark] = useInput(
    state.shouldUseQuestionMark
  );

  return (
    <Modal title="Game" onClose={onClose} width={254} onSubmit={setState}>
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
                  value="Beginner"
                  checked={difficulty === "Beginner"}
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
                  value="Intermediate"
                  checked={difficulty === "Intermediate"}
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
                  value="Expert"
                  checked={difficulty === "Expert"}
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
                id="dark-mode"
                name="dark-mode"
                value="dark-mode"
                checked={!!shouldUseQuestionMark}
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
