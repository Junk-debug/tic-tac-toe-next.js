import { GameCell } from "./game-cell";
import { GameInfo } from "./game-info";
import { useGameState } from "./use-game-state";
import { ResetButton } from "./reset-button";

export function Game() {
  const {
    cells,
    currentStep,
    winnerSymbol,
    isDraw,
    resetGame,
    toggleCell,
    getWinnerCell,
  } = useGameState();

  return (
    <div className="flex flex-col gap-2.5 items-center w-40 my-24 mx-auto p-5 border border-black">
      <GameInfo
        isDraw={isDraw}
        winnerSymbol={winnerSymbol}
        currentStep={currentStep}
      />
      <div className="grid pt-px pl-px grid-cols-[repeat(3,_30px)] grid-rows-[repeat(3,_30px)]">
        {cells.map((symbol, index) => (
          <GameCell
            key={index}
            symbol={symbol}
            isWinner={getWinnerCell(index)}
            onClick={() => toggleCell(index)}
          />
        ))}
      </div>
      <ResetButton onClick={resetGame} />
    </div>
  );
}
