import React from "react";
import type { ReactElement } from "react";

import { Modal } from "../../MinesweeperUI";

export interface GameSettingsProps {
  onClose: () => void;
}

export const GameSettings = ({ onClose }: GameSettingsProps): ReactElement => {
  return (
    <Modal title="Game" onClose={onClose} width={254}>
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
              />
              Marks (?)
            </label>
          </td>
        </tr>
      </table>
    </Modal>
  );
};
