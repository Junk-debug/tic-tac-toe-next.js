import { PLAYERS } from "./constants";
import { BackLink } from "./ui/back-link";
import { GameCell } from "./ui/game-cell";
import { GameInfo } from "./ui/game-info";
import { GameLayout } from "./ui/game-layout";
import { GameMoveInfo } from "./ui/game-move-info";
import { GameTitle } from "./ui/game-title";
import { PlayerInfo } from "./ui/player-info";
import { GameOverModal } from "./ui/game-over-modal";
import {
  GAME_STATE_ACTIONS,
  gameStateReducer,
  initGameState,
} from "./model/game-state-reducer";
import { getNextMove } from "./model/get-next-move";
import { computeWinner } from "./model/compute-winner";
import { computeWinnerSymbol } from "./model/compute-winner-symbol";
import { useReducer } from "react";

const PLAYERS_COUNT = 2;

export const Game = () => {
  const [gameState, dispatch] = useReducer(
    gameStateReducer,
    { playersCount: PLAYERS_COUNT },
    initGameState,
  );

  const { cells, currentMove, playersCount } = gameState;

  const winnerSequence = computeWinner(gameState);
  const nextMove = getNextMove(gameState);
  const winnerSymbol = computeWinnerSymbol(gameState, {
    winnerSequence,
    nextMove,
  });

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
            playersCount={playersCount}
          />
        }
        playersList={PLAYERS.slice(0, playersCount).map((player, index) => (
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
            onClick={() => {
              dispatch({
                type: GAME_STATE_ACTIONS.CELL_CLICK,
                index,
              });
            }}
            disabled={!!winnerSymbol}
            symbol={cell}
          />
        ))}
      />
      <GameOverModal
        players={PLAYERS.slice(0, playersCount).map((player, index) => (
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
