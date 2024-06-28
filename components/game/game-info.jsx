import clsx from "clsx";
import { Profile } from "../profile/profile";
import { GameSymbol } from "./game-symbol";
import { GAME_SYMBOLS } from "./constants";
import { useEffect, useState } from "react";

const PlayerInfo = ({ playerInfo, isRight, isTimerRunning }) => {
  const [seconds, setSeconds] = useState(60);

  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(seconds % 60).padStart(2, "0");

  const isWarning = seconds <= 10;

  useEffect(() => {
    if (isTimerRunning) {
      const interval = setInterval(
        () => setSeconds((s) => Math.max(s - 1, 0)),
        1000,
      );

      return () => {
        clearInterval(interval);
        setSeconds(60);
      };
    }
  }, [isTimerRunning]);

  return (
    <div
      className={clsx("flex gap-3 items-center", isRight && "flex-row-reverse")}
    >
      <Profile
        className="w-44"
        avatar={playerInfo.avatar}
        name={playerInfo.name}
        rating={playerInfo.rating}
        symbol={<GameSymbol symbol={playerInfo.symbol} />}
      />

      <div className="w-px h-6 bg-slate-200" />

      <div
        className={clsx(
          "text-lg font-semibold w-[60px]",
          (isWarning && "text-orange-600") ||
            (!isTimerRunning && "text-slate-300"),
        )}
      >
        {minutesString}:{secondsString}
      </div>
    </div>
  );
};

const players = [
  {
    id: 1,
    name: "Steve",
    symbol: GAME_SYMBOLS.CROSS,
    avatar: undefined,
    rating: 1213,
  },
  {
    id: 2,
    name: "Very long name i dont know why it is soooo longg",
    symbol: GAME_SYMBOLS.ZERO,
    avatar: undefined,
    rating: 6534,
  },
  {
    id: 3,
    name: "Maksim",
    symbol: GAME_SYMBOLS.SQUARE,
    avatar: undefined,
    rating: 9999,
  },
  {
    id: 4,
    name: "Mary",
    symbol: GAME_SYMBOLS.TRIANGLE,
    avatar: undefined,
    rating: 1,
  },
];

export const GameInfo = ({ className, playersCount, currentMove }) => {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 py-4 grid grid-cols-2 gap-3",
      )}
    >
      {players.slice(0, playersCount).map((player, index) => (
        <PlayerInfo
          isTimerRunning={currentMove === player.symbol}
          isRight={index % 2 === 1}
          key={player.id}
          playerInfo={player}
        />
      ))}
    </div>
  );
};
