import Link from "next/link";
import { ArrowLeftIcon } from "./icons/arrow-left-icon";
import { StarIcon } from "./icons/star-icon";
import { UserIcon } from "./icons/user-icon";
import { HistoryIcon } from "./icons/history-icon";

export const GameTitle = ({ playersCount }) => {
  return (
    <div className="pl-2">
      <Link
        href="#"
        className="flex items-center gap-2 text-xs text-teal-600 leading-tight -mb-0.5"
      >
        <ArrowLeftIcon /> Home
      </Link>
      <h1 className="text-4xl leading-tight">Tic Tac Toe</h1>
      <div className="flex gap-3 items-center text-slate-400 text-xs">
        <StarIcon />
        <div className="flex gap-1 items-center">
          <UserIcon />
          {playersCount}
        </div>
        <div className="flex gap-1 items-center">
          <HistoryIcon />1 minute per move
        </div>
      </div>
    </div>
  );
};
