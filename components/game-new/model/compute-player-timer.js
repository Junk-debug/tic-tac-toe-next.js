export const computePlayerTimer = (gameState, playerSymbol) => {
  return {
    timer: gameState.timers[playerSymbol],
    timerStartAt:
      playerSymbol === gameState.currentMove
        ? gameState.currentMoveStart
        : undefined,
  };
};
