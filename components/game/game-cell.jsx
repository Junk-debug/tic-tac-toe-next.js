import { GameSymbol } from "./game-symbol";
import clsx from "clsx";

export function GameCell({ isWinner, onClick, symbol }) {
  return (
    <button
      className={clsx(
        "flex items-center justify-center bg-transparent border border-gray-400 -mt-px -ml-px",
        isWinner && "bg-red-400 bg-opacity-10",
      )}
      onClick={onClick}
    >
      {symbol ? <GameSymbol symbol={symbol} /> : null}
    </button>
  );
}
