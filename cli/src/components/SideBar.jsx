import {
  ArrowFatLineLeft,
  Eyes,
  Plus,
  Television,
} from "@phosphor-icons/react";
import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import { httpRequest } from "../services/GatewayService";

// MARK: SideBar
export default function SideBar() {
  const [isOpen, setIsOpen] = useState(true);
  const [sites, setSites] = useState(null);

  const sideBarContainerCss =
    "w-22 h-[100vh] pl-2 pr-3 pt-3 flex flex-col items-center justify-start border-none bg-[var(--d-gray)] curtain-left";

  useEffect(() => {
    httpRequest("/api/site/subscribed/cat/streaming")
      .then((res) => {
        setTimeout(() => {
          setSites(res.sites);
        }, 400);
      })
      .catch((err) => console.error(err));
  }, []);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {sites == null ? (
        <div className={sideBarContainerCss}>
          <div className="w-14 rounded-xl bg-[var(--d-gray)] flex p-1 items-center justify-around blur-xs">
            <ArrowFatLineLeft weight="duotone" size={28} color="var(--white)" />
          </div>
          <div className="w-14 cursor-pointer rounded-xl p-1 mt-4 bg-[var(--d-gray)] flex items-center justify-around blur-xs">
            <Plus weight="bold" size={28} color="var(--white)" />
          </div>
        </div>
      ) : (
        <>
          {isOpen ? (
            <SideBarOpen
              toggleSidebar={toggleSidebar}
              sites={sites}
              sideBarContainerCss={sideBarContainerCss}
            />
          ) : (
            <div className="top-3 left-3 fixed">
              <div
                className="btn cursor-pointer rounded-xl bg-[var(--l-green)] p-1 flex items-center justify-around hover:scale-105 transition-transform duration-300"
                onClick={toggleSidebar}
              >
                <Television weight="duotone" size={36} color="var(--d-gray)" />
                <Eyes weight="duotone" size={30} color="var(--d-gray)" />
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}

// MARK: SideBarOpen
SideBarOpen.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  sites: PropTypes.array,
  sideBarContainerCss: PropTypes.string,
};
function SideBarOpen({ toggleSidebar, sites, sideBarContainerCss }) {
  // ! add functionality to add new site
  return (
    <div className={sideBarContainerCss}>
      <div
        className="btn peer w-14 cursor-pointer rounded-xl p-1 bg-[var(--d-gray)] flex items-center justify-around hover:scale-110 transition-transform duration-500"
        onClick={toggleSidebar}
      >
        <ArrowFatLineLeft weight="fill" size={28} color="var(--white)" />
      </div>

      <div className="flex flex-col overflow-scroll my-3 items-center peer-hover:opacity-50 duration-500 transition-all">
        {sites.map((site) => (
          <a
            className="py-2 transition-all hover:animate-spin hover:hue-rotate-180"
            href={site.url}
            target="_blank"
            key={site.name}
          >
            <img className="rounded-xl" src={site.iconSrc} alt={site.name} />
          </a>
        ))}
      </div>
      <div className="btn peer w-14 cursor-pointer rounded-xl p-1 bg-[var(--d-gray)] flex items-center justify-around peer-hover:opacity-50 hover:scale-110 transition-transform duration-500">
        <Plus weight="bold" size={28} color="var(--white)" />
      </div>
    </div>
  );
}
