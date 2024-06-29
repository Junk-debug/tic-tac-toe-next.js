import { GameSymbol } from "./game-symbol";

export const GameMoveInfo = ({ currentMove, nextMove }) => {
  return (
    <>
      <div className="flex items-center gap-1 text-xl font-semibold ">
        Current move: <GameSymbol symbol={currentMove} className="w-5 h-5" />
      </div>
      <div className="flex items-center gap-1 text-slate-400 text-xs">
        Next move: <GameSymbol symbol={nextMove} className="w-3 h-3" />
      </div>
    </>
  );
};
