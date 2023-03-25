import React from "react";
import type { ReactElement } from "react";

import { Modal } from "../../MinesweeperUI";

export interface ControlsSettingsProps {
  onClose: () => void;
}

export const ControlsSettings = ({
  onClose,
}: ControlsSettingsProps): ReactElement => {
  return (
    <Modal title="Controls" onClose={onClose} width={312}>
      <table className="tr-lines">
        <tr className="flex-row-center">
          <th className="width-25">Desktop</th>
          <td className="flex-column-left width-75">
            <ul>
              <li>
                <strong>Left-click</strong> an empty square to reveal it.
              </li>
              <li>
                <strong>Right-click</strong> (or <strong>Ctrl+click</strong>) an
                empty square to flag it.
              </li>
              <li>
                <strong>Midde-click</strong> (or{" "}
                <strong>left+right click</strong>) a number to reveal its
                adjacent squares.
              </li>
              <li>
                Press <strong>space</strong> bar while hovering over a square to
                flag it or reveal its adjacent squares.
              </li>
              <li>
                Press <strong>F2</strong> or click the smiley face to start a
                new game.
              </li>
            </ul>
          </td>
        </tr>
        <tr className="flex-row-center">
          <th className="width-25">Mobile</th>
          <td className="flex-column-left width-75">
            <ul>
              <li>
                <strong>Tap</strong> an empty square to reveal it.
              </li>
              <li>
                <strong>Long-press</strong> an empty square to flag it.
              </li>
              <li>
                <strong>Tap</strong> a number to reveal its adjacent squares.
              </li>
            </ul>
          </td>
        </tr>
      </table>
    </Modal>
  );
};
