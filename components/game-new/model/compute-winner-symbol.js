export const computeWinnerSymbol = (
  { currentMove, cells },
  { winnerSequence, nextMove },
) => (nextMove === currentMove ? currentMove : cells[winnerSequence?.[0]]);
