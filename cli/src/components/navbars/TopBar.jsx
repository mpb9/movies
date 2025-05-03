import { House } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

export default function TopBar() {
  return (
    <div className="absolute top-0 right-4 md:right-7 xl:right-10">
      <NavLink
        to="/"
        className="flex items-center p-1 text-[var(--white)] opacity-70 transition-discrete duration-300 cursor-pointer rounded-xl hover:scale-110 mt-3.5 xl:mt-5"
      >
        <House weight="light" size={60} color="var(--white)" />
      </NavLink>
    </div>
  );
}
