import { NavLink } from "react-router-dom";
import Category from "../components/Category";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-[calc(100%-3.5rem)] items-center">
      <h1 className="text-6xl py-[10px] text-[var(--gray)] font-black">
        the movies!
      </h1>

      {/* QUICK LINKS */}
      <div className="w-full flex items-center justify-center my-1 text-4xl italic font-light">
        <NavLink
          to="/spreadsheet"
          className="text-[var(--yellow)] hover:underline underline-offset-8"
        >
          SPREADSHEET
        </NavLink>
        <a
          className="ml-4 text-[var(--green)] hover:underline underline-offset-8"
          href="https://docs.google.com/document/d/1dl00sQH2cXBExBTZp5KaAWoJ_r9gFSnaCfZxn-lVTEM/edit?tab=t.hja3igqgei8"
          target="_blank"
          rel="noreferrer"
        >
          REVIEWS
        </a>
      </div>

      {/* CATEGORIES */}
      <div className="w-full h-full flex p-4 pt-8">
        <div className="w-1/2 h-full flex flex-col px-3">
          <Category name="film series" />
          <Category name="now showing" />
        </div>
        <div className="w-1/2 h-full flex flex-col px-3">
          <Category name="letterboxd" />
          <Category name="miscellaneous" />
        </div>
      </div>
    </div>
  );
}
