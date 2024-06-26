import { useState } from "react";
import { GAME_SYMBOLS, MOVE_ORDER } from "./constants";

export const getNextMove = (currentMove) => {
  const nextMoveIndex = MOVE_ORDER.indexOf(currentMove) + 1;
  return MOVE_ORDER[nextMoveIndex] ?? MOVE_ORDER[0];
};

export const useGameState = () => {
  const [{ cells, currentMove }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.CROSS,
  }));

  const nextMove = getNextMove(currentMove);

  const handleCellClick = (index) => {
    setGameState((prev) => {
      if (prev.cells[index]) {
        return prev;
      }

      return {
        ...prev,
        currentMove: getNextMove(prev.currentMove),
        cells: prev.cells.map((cell, i) =>
          i === index ? prev.currentMove : cell,
        ),
      };
    });
  };

  return { cells, currentMove, nextMove, handleCellClick };
};
