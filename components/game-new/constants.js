import avatarSrc from "./ui/images/avatar.png";

export const GAME_SYMBOLS = {
  ZERO: "zero",
  CROSS: "cross",
  TRIANGLE: "triangle",
  SQUARE: "square",
};

export const MOVE_ORDER = [
  GAME_SYMBOLS.CROSS,
  GAME_SYMBOLS.ZERO,
  GAME_SYMBOLS.TRIANGLE,
  GAME_SYMBOLS.SQUARE,
];

export const PLAYERS = [
  {
    id: 1,
    name: "Steve",
    symbol: GAME_SYMBOLS.CROSS,
    avatar: avatarSrc,
    rating: 1213,
  },
  {
    id: 2,
    name: "Very long name i dont know why it is soooo longg",
    symbol: GAME_SYMBOLS.ZERO,
    avatar: avatarSrc,
    rating: 6534,
  },
  {
    id: 3,
    name: "Maksim",
    symbol: GAME_SYMBOLS.SQUARE,
    avatar: avatarSrc,
    rating: 9999,
  },
  {
    id: 4,
    name: "Mary",
    symbol: GAME_SYMBOLS.TRIANGLE,
    avatar: avatarSrc,
    rating: 1,
  },
];
