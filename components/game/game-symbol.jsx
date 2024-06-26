import { GAME_SYMBOLS } from "./constants";
import { CircleIcon } from "./icons/circle-icon";
import { CrossIcon } from "./icons/cross-icon";
import { SquareIcon } from "./icons/square-icon";
import { TriangleIcon } from "./icons/triangle-icon";

export const GameSymbol = ({ symbol, className }) => {
  const Icon =
    {
      [GAME_SYMBOLS.CROSS]: CrossIcon,
      [GAME_SYMBOLS.ZERO]: CircleIcon,
      [GAME_SYMBOLS.TRIANGLE]: TriangleIcon,
      [GAME_SYMBOLS.SQUARE]: SquareIcon,
    }[symbol] ?? CrossIcon;

  return <Icon className={className} />;
};
