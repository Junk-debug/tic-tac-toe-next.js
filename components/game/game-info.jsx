import clsx from "clsx";
import { Profile } from "../profile/profile";
import { CrossIcon } from "./icons/cross-icon";

export const GameInfo = ({ className }) => {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 py-4 flex justify-between",
      )}
    >
      <div className="flex gap-3 items-center">
        <Profile className="w-44" flag={<CrossIcon />} />
        <div className="w-px h-6 bg-slate-200" />
        <div className="text-lg font-semibold">01:08</div>
      </div>
    </div>
  );
};
