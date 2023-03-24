import React from "react";
import type { ReactElement } from "react";

import { Modal } from "../../MinesweeperUI";

export interface ImportSettingsProps {
  onClose: () => void;
}

export const ImportSettings = ({
  onClose,
}: ImportSettingsProps): ReactElement => {
  return (
    <Modal title="Game" onClose={onClose} width={140}>
      <table>
        <tr className="flex-row-center">
          <th className="width-50">Zoom</th>
          <td className="flex-column-left">
            <label>
              <input type="radio" id="zoom-100" name="zoom" value="100%" />
              100%
            </label>
            <label>
              <input type="radio" id="zoom-150" name="zoom" value="200%" />
              150%
            </label>
            <label>
              <input type="radio" id="zoom-200" name="zoom" value="200%" />
              200%
            </label>
          </td>
        </tr>
        <tr className="flex-row-center">
          <th className="width-50">Position</th>
          <td className="flex-column-left">
            <label>
              <input
                type="radio"
                id="position-center"
                name="position"
                value="center"
              />
              center
            </label>
            <label>
              <input
                type="radio"
                id="position-center"
                name="position"
                value="center"
              />
              left
            </label>
          </td>
        </tr>
        <tr className="flex-row-center">
          <th>night mode</th>
          <td className="flex-column-left">
            <label>
              <input
                type="checkbox"
                id="dark-mode"
                name="dark-mode"
                value="dark-mode"
              />
            </label>
          </td>
        </tr>
      </table>
    </Modal>
  );
};
