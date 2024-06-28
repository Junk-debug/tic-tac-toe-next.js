import clsx from "clsx";
import { UiButton } from "../uikit/ui-button";
import { GameSymbol } from "./game-symbol";
import { useGameState } from "./use-game-state";

const GameFieldLayout = ({ children, className }) => {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 pt-5 pb-7",
      )}
    >
      {children}
    </div>
  );
};

const GameMoveInfo = ({ actions, currentMove, nextMove }) => {
  return (
    <div className="flex gap-3 items-center">
      <div className="mr-auto leading-tight">
        <div className="flex items-center gap-1 text-xl font-semibold ">
          Current move: <GameSymbol symbol={currentMove} className="w-5 h-5" />
        </div>
        <div className="flex items-center gap-1 text-slate-400 text-xs">
          Next move: <GameSymbol symbol={nextMove} className="w-3 h-3" />
        </div>
      </div>

      {actions}
    </div>
  );
};

const GameGrid = ({ children }) => {
  return (
    <div className="grid grid-cols-[repeat(19,30px)] grid-rows-[repeat(19,30px)] pl-px pt-px mt-3">
      {children}
    </div>
  );
};

const GameCell = ({ children, onClick, isWinner }) => (
  <button
    onClick={onClick}
    className={clsx(
      "border border-slate-200 -ml-px -mt-px flex items-center justify-center hover:bg-slate-200",
      isWinner && "bg-orange-600/10",
    )}
  >
    {children}
  </button>
);

export const GameField = ({
  className,
  handleCellClick,
  cells,
  currentMove,
  nextMove,
  winnerSequence,
}) => {
  const actions = (
    <>
      <UiButton>Draw</UiButton>
      <UiButton variant="outlined">Surrender</UiButton>
    </>
  );

  return (
    <GameFieldLayout className={className}>
      <GameMoveInfo
        actions={actions}
        currentMove={currentMove}
        nextMove={nextMove}
      />

      <GameGrid>
        {cells.map((symbol, index) => (
          <GameCell
            isWinner={winnerSequence?.includes(index)}
            onClick={() => handleCellClick(index)}
            key={index}
          >
            {symbol && <GameSymbol className="w-5 h-5" symbol={symbol} />}
          </GameCell>
        ))}
      </GameGrid>
    </GameFieldLayout>
  );
};
