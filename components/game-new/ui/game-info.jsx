import { StarIcon } from "./icons/star-icon";
import { UserIcon } from "./icons/user-icon";
import { HistoryIcon } from "./icons/history-icon";

export const GameInfo = ({ playersCount, isRatingGame, timeMode }) => {
  return (
    <div className="flex gap-3 items-center text-slate-400 text-xs">
      {isRatingGame && <StarIcon />}
      <div className="flex gap-1 items-center">
        <UserIcon />
        {playersCount}
      </div>
      <div className="flex gap-1 items-center">
        <HistoryIcon />
        {timeMode}
      </div>
    </div>
  );
};
