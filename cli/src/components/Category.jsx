import { BracketsCurly, ListPlus, Textbox } from "@phosphor-icons/react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getSitesByCat } from "services/SiteService.js";
import AddSiteForm from "./forms/AddSiteForm.jsx";
import EditSiteForm from "./forms/EditSiteForm.jsx";

Category.propTypes = {
  siteCat: PropTypes.object,
};
export default function Category({ siteCat }) {
  const [sites, setSites] = useState([]);
  const [showAddSiteForm, setShowAddSiteForm] = useState(false);
  const [showEditSiteForm, setShowEditSiteForm] = useState(false);

  const categoryTitleCss =
    "mr-[25%] tracking-widest text-[1.75rem] leading-8 font-light underline-offset-8 uppercase pb-1.5";

  useEffect(() => {
    getSitesByCat(siteCat.name).then((res) => {
      if (res === 0) return;
      setSites(res);
    });
  }, [showAddSiteForm, showEditSiteForm, siteCat]);

  function toggleAddSiteForm() {
    setShowAddSiteForm(!showAddSiteForm);
  }
  function toggleEditSiteForm() {
    setShowEditSiteForm(!showEditSiteForm);
  }

  return (
    <>
      {sites.length > 0 && (
        <div
          className="w-full relative flex flex-col items-center my-3 p-2 rounded-xl border-[1px]"
          style={{ borderColor: siteCat.color.l.hex }}
        >
          {/* BUTTONS */}
          <div
            className="absolute flex items-center justify-end top-2 right-4"
            style={{ color: siteCat.color.l.hex }}
          >
            <div
              className="cursor-pointer rounded-md bg-[var(--d-gray)] px-0.5 hover:scale-125 transition-transform duration-200 mr-2.5"
              onClick={toggleEditSiteForm}
            >
              <Textbox weight="thin" size={34} color="currentColor" />
            </div>
            <div
              className="cursor-pointer rounded-md bg-[var(--d-gray)] px-0.5 hover:scale-125 transition-transform duration-200 mr-2.5"
              onClick={toggleAddSiteForm}
            >
              <ListPlus weight="thin" size={32} color="currentColor" />
            </div>
            <NavLink
              to="/jsonified"
              title="jsonified"
              docs={sites}
              className="cursor-pointer rounded-md bg-[var(--d-gray)] px-0.5 hover:scale-125 transition-transform duration-200"
            >
              <BracketsCurly weight="thin" size={30} color="currentColor" />
            </NavLink>
          </div>
          {/* TITLE */}
          {siteCat.url != undefined && siteCat.url != null ? (
            <a
              className={`${categoryTitleCss} hover:underline`}
              style={{ color: siteCat.color.l.hex }}
              href={siteCat.url}
              target="_blank"
              rel="noreferrer"
            >
              {siteCat.name}
            </a>
          ) : (
            <>
              {siteCat.navLink != undefined && siteCat.navLink != null ? (
                <NavLink
                  className={`${categoryTitleCss} hover:underline`}
                  style={{ color: siteCat.color.l.hex }}
                  to={siteCat.navLink}
                >
                  {siteCat.name}
                </NavLink>
              ) : (
                <div
                  className={`${categoryTitleCss} cursor-default`}
                  style={{ color: siteCat.color.l.hex }}
                >
                  {siteCat.name}
                </div>
              )}
            </>
          )}
          {/* SITES */}
          <div className="flex flex-wrap items-center p-1 pb-2 justify-evenly">
            {sites.map((site) => (
              <a
                key={site._id}
                className="text-[var(--gray)] lowercase text-[1.4rem] leading-7 hover:underline p-1 px-3 m-1 my-1.5 bg-[var(--d-gray)] rounded-xl font-medium"
                href={site.url}
                target="_blank"
                rel="noreferrer"
              >
                {site.name}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* FORMS */}
      {showAddSiteForm && (
        <AddSiteForm
          initialCat={siteCat.name}
          toggleAddSiteForm={toggleAddSiteForm}
        />
      )}
      {showEditSiteForm && (
        <EditSiteForm sites={sites} toggleEditSiteForm={toggleEditSiteForm} />
      )}
    </>
  );
}
