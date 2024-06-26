import Image from "next/image";
import avatarSrc from "./avatar.png";

export const Profile = ({ className, symbol }) => {
  return (
    <div
      className={`flex items-center gap-2 text-start text-teal-600 relative ${className}`}
    >
      <Image alt="avatar" src={avatarSrc} width={48} height={48} unoptimized />
      <div>
        <div className="text-lg leading-tight">Paromovevg</div>
        <div className="text-slate-400 text-xs leading-tight">Rating: 1230</div>
      </div>
      {symbol && (
        <div className="w-5 h-5 bg-white rounded-full shadow absolute -left-1 -top-1 flex items-center justify-center">
          {symbol}
        </div>
      )}
    </div>
  );
};
