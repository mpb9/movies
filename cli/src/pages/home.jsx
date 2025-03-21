import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Loading from "src/components/Loading";
import BottomBar from "../components/bars/BottomBar";
import Category from "../components/Category";
import { getSiteCatByName } from "../services/SiteCatService";

export default function Home() {
  const [filmSeries, setFilmSeries] = useState(null);
  const [nowShowing, setNowShowing] = useState(null);
  const [letterboxd, setLetterboxd] = useState(null);
  const [miscellaneous, setMiscellaneous] = useState(null);
  const [loaded, setLoaded] = useState(0);

  useEffect(() => {
    try {
      getSiteCatByName("film series").then((res) => {
        setFilmSeries(res);
        updateLoaded();
      });
    } catch (err) {
      console.error(err);
      updateLoaded();
    }
  }, []);

  useEffect(() => {
    try {
      getSiteCatByName("letterboxd").then((res) => {
        setLetterboxd(res);
        updateLoaded();
      });
    } catch (err) {
      console.error(err);
      updateLoaded();
    }
  }, []);

  useEffect(() => {
    try {
      getSiteCatByName("miscellaneous").then((res) => {
        setMiscellaneous(res);
        updateLoaded();
      });
    } catch (err) {
      console.error(err);
      updateLoaded();
    }
  }, []);

  useEffect(() => {
    try {
      getSiteCatByName("now showing").then((res) => {
        setNowShowing(res);
        updateLoaded();
      });
    } catch (err) {
      console.error(err);
      updateLoaded();
    }
  }, []);

  function updateLoaded() {
    setLoaded((loaded) => loaded + 1);
  }

  if (loaded < 4) {
    return <Loading />;
  }

  console.log("Home loaded");

  return (
    <>
      <div className="flex flex-col w-full h-[calc(100%-3.5rem)] items-center">
        <h1 className="text-6xl pb-3 pt-4 xl:pt-5 xl:pb-4 text-[var(--gray)] font-black cursor-default">
          the movies!
        </h1>

        {/* QUICK LINKS */}
        <div className="flex items-center justify-center w-full mt-3 mb-1 text-4xl italic font-light">
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
        <div className="flex flex-col w-full h-full px-5 py-4 overflow-scroll md:pt-6 xl:pt-8 md:flex-row">
          <div className="flex flex-col w-full px-3 md:w-1/2 h-fit md:h-full">
            <Category siteCat={filmSeries} />
            <Category siteCat={nowShowing} />
          </div>
          <div className="flex flex-col w-full h-full px-3 md:w-1/2">
            <Category siteCat={letterboxd} />
            <Category siteCat={miscellaneous} />
          </div>
        </div>
      </div>
      <BottomBar />
    </>
  );
}
