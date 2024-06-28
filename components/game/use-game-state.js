import { useState } from "react";
import { GAME_SYMBOLS } from "./constants";
import { computeWinner, getNextMove } from "./model";

export const useGameState = (playersCount) => {
  const [{ cells, currentMove }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.CROSS,
  }));

  const winnerSequence = computeWinner(cells);
  const nextMove = getNextMove(currentMove, playersCount);

  const handleCellClick = (index) => {
    setGameState((prev) => {
      if (prev.cells[index]) {
        return prev;
      }

      return {
        ...prev,
        currentMove: getNextMove(prev.currentMove, playersCount),
        cells: prev.cells.map((cell, i) =>
          i === index ? prev.currentMove : cell,
        ),
      };
    });
  };

  return { cells, currentMove, nextMove, handleCellClick, winnerSequence };
};
