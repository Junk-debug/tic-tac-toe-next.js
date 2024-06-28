import Image from "next/image";
import logoSrc from "./logo.svg";
import { Profile } from "../profile/profile";
import { ArrowDownIcon } from "./arrow-down-icon";
import { UiButton } from "../uikit/ui-button";

export const Header = () => {
  return (
    <header className="flex h-24 items-center w-full px-8 bg-white shadow-lg">
      <Image alt="logo" src={logoSrc} />
      <div className="w-px h-8 bg-slate-200 mx-6" />
      <UiButton size="lg" className="w-44">
        Play
      </UiButton>
      <button className="ml-auto flex items-center gap-2 text-teal-600">
        <Profile name="Maksim" avatar={undefined} rating={1230} />
        <ArrowDownIcon />
      </button>
    </header>
  );
};
