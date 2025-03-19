import {
  CaretDoubleLeft,
  Eyes,
  ListPlus,
  Television,
  Textbox,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { getSitesBySubscribedAndCat } from "../services/SiteService.js";
import AddSiteForm from "./forms/AddSiteForm";
import EditSiteForm from "./forms/EditSiteForm";

// MARK: SideBar
export default function SideBar() {
  const [isOpen, setIsOpen] = useState(true);
  const [sites, setSites] = useState(null);
  const [showAddSiteForm, setShowAddSiteForm] = useState(false);
  const [showEditSiteForm, setShowEditSiteForm] = useState(false);

  // info: http request to get sites
  useEffect(() => {
    getSitesBySubscribedAndCat(1, "streaming")
      .then((res) => {
        setSites(res);
      })
      .catch((err) => console.error(err));
  }, [showAddSiteForm, showEditSiteForm]);

  // info: toggle sidebar and site forms
  function toggleSidebar() {
    setIsOpen(!isOpen);
  }
  function toggleAddSiteForm() {
    setShowAddSiteForm(!showAddSiteForm);
  }
  function toggleEditSiteForm() {
    setShowEditSiteForm(!showEditSiteForm);
  }

  return (
    <>
      {isOpen && sites != null ? (
        // MARK: sidebar open
        <>
          <div className="w-28 h-[100vh] pl-2 pr-3 pt-3 flex flex-col items-center justify-start border-none bg-[var(--black)]">
            <div
              className="peer btn w-14 cursor-pointer rounded-xl p-1 bg-[var(--d-gray)] flex items-center justify-around hover:scale-110 transition-transform duration-500"
              onClick={toggleSidebar}
            >
              <CaretDoubleLeft
                weight="duotone"
                size={42}
                color="var(--white)"
              />
            </div>

            <div className="flex flex-col items-center w-5/6 pl-1 my-2 overflow-scroll transition-all duration-500 peer-hover:opacity-50">
              {sites.map((site) => (
                <a
                  className="py-2 transition-all hover:animate-spin hover:hue-rotate-180"
                  href={site.url}
                  target="_blank"
                  key={site.name}
                >
                  <img
                    className="rounded-xl"
                    src={site.iconSrc}
                    alt={site.name}
                  />
                </a>
              ))}
            </div>

            <div
              className="btn peer w-14 cursor-pointer rounded-xl p-1 bg-[var(--d-gray)] flex items-center justify-around peer-hover:opacity-50 hover:scale-110 transition-transform duration-500 mt-3 mb-4"
              onClick={toggleEditSiteForm}
            >
              <Textbox weight="duotone" size={42} color="var(--white)" />
            </div>
            <div
              className="btn peer w-14 cursor-pointer rounded-xl p-1 bg-[var(--d-gray)] flex items-center justify-around peer-hover:opacity-50 hover:scale-110 transition-transform duration-500 mb-2"
              onClick={toggleAddSiteForm}
            >
              <ListPlus weight="duotone" size={42} color="var(--white)" />
            </div>
          </div>
          {showAddSiteForm && (
            <AddSiteForm
              initialCat="streaming"
              toggleAddSiteForm={toggleAddSiteForm}
            />
          )}
          {showEditSiteForm && (
            <EditSiteForm
              sites={sites}
              toggleEditSiteForm={toggleEditSiteForm}
            />
          )}
        </>
      ) : (
        // MARK: sidebar closed
        <div className="fixed top-5 left-8">
          <div
            className="flex items-center justify-around p-1 transition-transform duration-300 cursor-pointer btn rounded-xl hover:scale-105"
            onClick={toggleSidebar}
          >
            <Television weight="duotone" size={60} color="var(--l-green)" />
            <Eyes weight="duotone" size={50} color="var(--l-green)" />
          </div>
        </div>
      )}
    </>
  );
}
