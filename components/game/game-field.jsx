import clsx from "clsx";
import { CrossIcon } from "./icons/cross-icon";
import { CircleIcon } from "./icons/circle-icon";
import { UiButton } from "../uikit/ui-button";

const cells = new Array(19 * 19).fill(null);

export const GameField = ({ className }) => {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 pt-5 pb-7",
      )}
    >
      <div className="flex gap-3 items-center">
        <div className="mr-auto leading-tight">
          <div className="flex items-center gap-1 text-xl font-semibold ">
            Current move: <CircleIcon className="w-5 h-5" />
          </div>
          <div className="flex items-center gap-1 text-slate-400 text-xs">
            Next move: <CrossIcon />
          </div>
        </div>

        <UiButton size="md">Draw</UiButton>

        <UiButton variant="outlined" size="md">
          Surrender
        </UiButton>
      </div>

      <div className="grid grid-cols-[repeat(19,30px)] grid-rows-[repeat(19,30px)] pl-px pt-px mt-3">
        {cells.map((_, index) => (
          <button
            key={index}
            className="border border-slate-200 -ml-px -mt-px flex items-center justify-center hover:bg-slate-200"
          ></button>
        ))}
      </div>
    </div>
  );
};
