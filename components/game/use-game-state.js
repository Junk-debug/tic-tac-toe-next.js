import { useState } from "react";
import { GAME_SYMBOLS } from "./constants";
import { computeWinner, getNextMove } from "./model";

export const useGameState = (playersCount) => {
  const [{ cells, currentMove, playersTimeOver }, setGameState] = useState(
    () => ({
      cells: new Array(19 * 19).fill(null),
      currentMove: GAME_SYMBOLS.CROSS,
      playersTimeOver: [],
    }),
  );

  const winnerSequence = computeWinner(cells);
  const nextMove = getNextMove(currentMove, playersCount, playersTimeOver);

  const winnerSymbol =
    nextMove === currentMove ? currentMove : winnerSequence?.[0];

  const handleCellClick = (index) => {
    setGameState((prev) => {
      if (prev.cells[index]) {
        return prev;
      }

      return {
        ...prev,
        currentMove: getNextMove(
          prev.currentMove,
          playersCount,
          prev.playersTimeOver,
        ),
        cells: prev.cells.map((cell, i) =>
          i === index ? prev.currentMove : cell,
        ),
      };
    });
  };

  const handlePlayerTimeOver = (symbol) => {
    setGameState((prev) => {
      return {
        ...prev,
        playersTimeOver: [...prev.playersTimeOver, symbol],
        currentMove: getNextMove(
          prev.currentMove,
          playersCount,
          prev.playersTimeOver,
        ),
      };
    });
  };

  return {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
    handlePlayerTimeOver,
    winnerSequence,
    winnerSymbol,
  };
};
