import Image from "next/image";
import avatarSrc from "./avatar.png";

export const Profile = ({
  className,
  symbol,
  name,
  rating,
  avatar = avatarSrc,
}) => {
  return (
    <div
      className={`flex items-center gap-2 text-start text-teal-600 relative ${className}`}
    >
      <Image alt="avatar" src={avatar} width={48} height={48} unoptimized />
      <div className="overflow-hidden">
        <div className="text-lg leading-tight truncate">{name}</div>
        <div className="text-slate-400 text-xs leading-tight">
          Rating: {rating}
        </div>
      </div>
      {symbol && (
        <div className="w-5 h-5 bg-white rounded-full shadow absolute -left-1 -top-1 flex items-center justify-center">
          {symbol}
        </div>
      )}
    </div>
  );
};
