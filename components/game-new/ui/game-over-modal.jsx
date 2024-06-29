import { UiButton } from "../../uikit/ui-button";
import { UiModal } from "../../uikit/ui-modal";

export const GameOverModal = ({ winnerName, players }) => {
  return (
    <UiModal isOpen={winnerName} onClose={() => {}}>
      <UiModal.Header>Game over!</UiModal.Header>
      <UiModal.Body>
        <div className="text-sm">
          Winner: <span className="text-teal-600">{winnerName}</span>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-2">{players}</div>
      </UiModal.Body>
      <UiModal.Footer>
        <UiButton variant="outlined">Go back</UiButton>
        <UiButton>Play again</UiButton>
      </UiModal.Footer>
    </UiModal>
  );
};
