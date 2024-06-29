import Image from "next/image";
import { GameSymbol } from "./game-symbol";
import clsx from "clsx";

export const PlayerInfo = ({
  isRight,
  name,
  rating,
  avatar,
  symbol,
  isTimerRunning,
  seconds,
}) => {
  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(seconds % 60).padStart(2, "0");

  const isWarning = seconds <= 10;

  const getTimerColor = () => {
    if (isTimerRunning) {
      return isWarning ? "text-orange-600" : "text-slate-900";
    }

    return "text-slate-200";
  };

  return (
    <div
      className={clsx("flex gap-3 items-center", isRight && "flex-row-reverse")}
    >
      <div className="flex items-center gap-2 text-start text-teal-600 w-44 relative">
        <Image alt="avatar" src={avatar} width={48} height={48} unoptimized />
        <div className="overflow-hidden">
          <div className="text-lg leading-tight truncate">{name}</div>
          <div className="text-slate-400 text-xs leading-tight">
            Rating: {rating}
          </div>
        </div>

        <div className="w-5 h-5 bg-white rounded-full shadow absolute -left-1 -top-1 flex items-center justify-center">
          {<GameSymbol symbol={symbol} />}
        </div>
      </div>
      <div className="w-px h-6 bg-slate-200" />
      <div className={clsx("text-lg font-semibold w-[60px]", getTimerColor())}>
        {minutesString}:{secondsString}
      </div>
    </div>
  );
};
