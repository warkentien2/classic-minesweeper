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
    <Modal title="Import" onClose={onClose} width={252}>
      <table className="tr-zebra">
        <tr className="flex-column">
          <td className="flex-column">
            <p>Paste exported game state:</p>
            <textarea rows={3}></textarea>
          </td>
        </tr>
        <tr className="flex-column-left">
          <button type="submit" disabled>
            Load Game
          </button>
        </tr>
      </table>
    </Modal>
  );
};
