import { useState } from "react";
import {
  GameField,
  GameInfo,
  GameTitle,
  useGameState,
} from "../components/game";
import { Header } from "../components/header";
import { GameSymbol } from "../components/game/game-symbol";

export default function HomePage() {
  const [playersCount, setPlayersCount] = useState(4);

  const {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
    handlePlayerTimeOver,
    winnerSequence,
    winnerSymbol,
  } = useGameState(playersCount);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 w-max mx-auto">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          currentMove={currentMove}
          playersCount={playersCount}
          onPlayerTimeOver={handlePlayerTimeOver}
          isWinner={!!winnerSymbol}
          className="mt-4"
        />
        {winnerSymbol && <GameSymbol symbol={winnerSymbol} />}

        <GameField
          winnerSequence={winnerSequence}
          winnerSymbol={winnerSymbol}
          playersCount={playersCount}
          handleCellClick={handleCellClick}
          cells={cells}
          currentMove={currentMove}
          nextMove={nextMove}
          className="mt-6"
        />
      </main>
    </div>
  );
}
