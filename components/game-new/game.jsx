import { PLAYERS } from "./constants";
import { useGameState } from "./model/use-game-state";
import { BackLink } from "./ui/back-link";
import { GameCell } from "./ui/game-cell";
import { GameInfo } from "./ui/game-info";
import { GameLayout } from "./ui/game-layout";
import { GameMoveInfo } from "./ui/game-move-info";
import { GameOverModal } from "./ui/game-over-modal";
import { GameTitle } from "./ui/game-title";
import { PlayerInfo } from "./ui/player-info";

const PLAYERS_COUNT = 2;

export const Game = () => {
  const {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
    handlePlayerTimeOver,
    winnerSequence,
    winnerSymbol,
  } = useGameState(PLAYERS_COUNT);

  const winnerPlayer = PLAYERS.find((player) => player.symbol === winnerSymbol);

  return (
    <>
      <GameLayout
        title={<GameTitle />}
        backLink={<BackLink />}
        gameInfo={
          <GameInfo
            isRatingGame
            timeMode="1 minute per move"
            playersCount={4}
          />
        }
        playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
          <PlayerInfo
            key={player.id}
            name={player.name}
            avatar={player.avatar}
            symbol={player.symbol}
            rating={player.rating}
            isRight={index % 2 === 1}
            seconds={60}
          />
        ))}
        gameMoveInfo={
          <GameMoveInfo currentMove={currentMove} nextMove={nextMove} />
        }
        gameCells={cells.map((cell, index) => (
          <GameCell
            key={index}
            isWinner={winnerSequence?.includes(index)}
            onClick={() => handleCellClick(index)}
            disabled={!!winnerSymbol}
            symbol={cell}
          />
        ))}
      />
      <GameOverModal
        players={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
          <PlayerInfo
            key={player.id}
            name={player.name}
            avatar={player.avatar}
            symbol={player.symbol}
            rating={player.rating}
            isRight={index % 2 === 1}
            seconds={60}
          />
        ))}
        winnerName={winnerPlayer?.name}
      />
    </>
  );
};
