import { House } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

export default function TopBar() {
  return (
    <div className="fixed top-3 right-3">
      <NavLink
        to="/"
        className="btn cursor-pointer rounded-xl bg-[var(--gray)] p-1 flex items-center justify-around hover:scale-105 transition-transform duration-300"
      >
        <House weight="thin" size={28} color="var(--d-gray)" />
      </NavLink>
    </div>
  );
}
