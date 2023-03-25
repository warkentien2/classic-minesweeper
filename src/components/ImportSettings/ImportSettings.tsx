import React, { useContext } from "react";
import type { ReactElement } from "react";

import { Modal } from "../../MinesweeperUI";
import { GameContext } from "../../engine";
import { gameStateSchema } from "../../engine/schemas";
import { decrypt } from "../../utils";
import { useInput } from "../../hooks";

export interface ImportSettingsProps {
  onClose: () => void;
}

export const ImportSettings = ({
  onClose,
}: ImportSettingsProps): ReactElement => {
  const { setGameStore } = useContext(GameContext);
  const [encryptedGameState, onChangeEncryptedGameState] = useInput("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const decryptedGameState = decrypt(encryptedGameState);
    console.log({ decryptedGameState });
    if (gameStateSchema.parse(decryptedGameState)) {
      console.log("Valid game state");
      setGameStore(decryptedGameState);
    }
    onClose();
  };

  return (
    <Modal title="Import" onClose={onClose} width={252} onSubmit={handleSubmit}>
      <table className="tr-zebra">
        <tr className="flex-column">
          <td className="flex-column">
            <p>Paste exported game state:</p>
            <textarea rows={3} onChange={onChangeEncryptedGameState}>
              {encryptedGameState}
            </textarea>
          </td>
        </tr>
        <tr className="flex-column-left">
          <button type="submit" disabled={!encryptedGameState}>
            Load Game
          </button>
        </tr>
      </table>
    </Modal>
  );
};
