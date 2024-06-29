import clsx from "clsx";
import { GameSymbol } from "./game-symbol";

export const GameCell = ({ symbol, onClick, isWinner, disabled }) => (
  <button
    disabled={disabled}
    onClick={onClick}
    className={clsx(
      "border border-slate-200 -ml-px -mt-px flex items-center justify-center hover:bg-slate-200",
      isWinner && "bg-orange-600/10",
    )}
  >
    {symbol && <GameSymbol className="w-5 h-5" symbol={symbol} />}
  </button>
);
