import React from "react";
import type { ReactElement } from "react";

import { Modal } from "../../MinesweeperUI";

export interface ExportSettingsProps {
  onClose: () => void;
}

export const ExportSettings = ({
  onClose,
}: ExportSettingsProps): ReactElement => {
  return (
    <Modal title="Export" onClose={onClose} width={252}>
      <table>
        <tr className="flex-row-center">
          <td className="flex-column">
            <em>Game state copied to your clipboard!</em>
            <textarea rows={3}></textarea>
            <p>
              ⓘ “First click cannot be a mine” behavior has been disabled for
              this game, as a result of having clicked “Export”.
            </p>
          </td>
        </tr>
      </table>
    </Modal>
  );
};
