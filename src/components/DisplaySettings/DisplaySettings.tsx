import React, { useContext, useEffect } from "react";
import type { ReactElement } from "react";

import { Modal } from "../../MinesweeperUI";
import { useInput } from "../../hooks";
import { GameContext } from "../../engine";
import type { GameStateType } from "../../engine/types";

export interface DisplaySettingsProps {
  onClose: () => void;
}

export const DisplaySettings = ({
  onClose,
}: DisplaySettingsProps): ReactElement => {
  const { gameStore, setGameStore } = useContext(GameContext);
  const [zoom, onChangeZoom] = useInput(gameStore.zoom);
  const [position, onChangePosition] = useInput(gameStore.position);
  const [nightMode, onChangeNightMode] = useInput(gameStore.nightMode);

  useEffect(() => {
    if (
      gameStore.zoom === zoom &&
      gameStore.position === position &&
      gameStore.nightMode === nightMode
    )
      return;

    const updateStore = {
      ...gameStore,
      zoom,
      position,
      nightMode,
    } as GameStateType;
    setGameStore(updateStore);
  }, [zoom, position, nightMode]);

  return (
    <Modal title="Display" onClose={onClose} width={140}>
      <table className="tr-lines">
        <tbody>
          <tr className="flex-row-center">
            <th className="width-50">Zoom</th>
            <td className="flex-column-left">
              <label>
                <input
                  type="radio"
                  id="zoom-100"
                  name="zoom"
                  value="100"
                  checked={zoom === 100}
                  onChange={onChangeZoom}
                />
                100%
              </label>
              <label>
                <input
                  type="radio"
                  id="zoom-150"
                  name="zoom"
                  value="150"
                  checked={zoom === 150}
                  onChange={onChangeZoom}
                />
                150%
              </label>
              <label>
                <input
                  type="radio"
                  id="zoom-200"
                  name="zoom"
                  value="200"
                  checked={zoom === 200}
                  onChange={onChangeZoom}
                />
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
                  checked={position === "center"}
                  onChange={onChangePosition}
                />
                center
              </label>
              <label>
                <input
                  type="radio"
                  id="position-left"
                  name="position"
                  value="left"
                  checked={position === "left"}
                  onChange={onChangePosition}
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
                  value="boolean"
                  checked={Boolean(nightMode)}
                  onChange={onChangeNightMode}
                />
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </Modal>
  );
};
