import { GameSymbol } from "./game-symbol";

export function GameInfo({ isDraw, winnerSymbol, currentStep }) {
  if (isDraw) {
    return <div>Ничья</div>;
  }

  if (winnerSymbol) {
    return (
      <div>
        Победитель: <GameSymbol symbol={winnerSymbol} />
      </div>
    );
  }

  return (
    <div>
      Ход: <GameSymbol symbol={currentStep} />
    </div>
  );
}
