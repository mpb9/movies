import { BracketsCurly, ListPlus, Textbox } from "@phosphor-icons/react";
import AddSiteForm from "components/forms/AddSiteForm";
import EditSiteForm from "components/forms/EditSiteForm";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getSitesByCat } from "services/SiteService";

Category.propTypes = {
  siteCat: PropTypes.object,
};
export default function Category({ siteCat }) {
  const [sites, setSites] = useState([]);
  const [showAddSiteForm, setShowAddSiteForm] = useState(false);
  const [showEditSiteForm, setShowEditSiteForm] = useState(false);

  const categoryTitleCss =
    "w-full tracking-widest text-[1.75rem] md:text-[1.5rem] lg:text-[1.75rem] text-center pr-8 md:pr-0.5 lg:pr-8 leading-8 font-light uppercase whitespace-nowrap text-ellipsis underline-offset-8";

  useEffect(() => {
    getSitesByCat(siteCat.name).then((res) => {
      if (res === 0) return;
      setSites(res);
    });
  }, [showAddSiteForm, showEditSiteForm, siteCat.name]);

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
          className="w-full flex flex-col items-center my-3 p-2 rounded-xl border-[1px]"
          style={{ borderColor: siteCat.color.l.hex }}
        >
          <div className="flex items-center justify-between w-full">
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

            {/* BUTTONS */}
            <div
              className="flex items-center justify-end h-full pr-2 transition-all duration-200 scale-100 md:pr-1 lg:pr-2 md:scale-90 lg:scale-100"
              style={{ color: siteCat.color.l.hex }}
            >
              <div
                className="cursor-pointer rounded-md bg-[var(--d-gray)] px-0.5 hover:scale-125 transition-transform duration-200 mr-2 md:mr-1 lg:mr-2"
                onClick={toggleEditSiteForm}
              >
                <Textbox weight="thin" size={30} color="currentColor" />
              </div>
              <div
                className="cursor-pointer rounded-md bg-[var(--d-gray)] px-0.5 hover:scale-125 transition-transform duration-200 mr-2 md:mr-1 lg:mr-2"
                onClick={toggleAddSiteForm}
              >
                <ListPlus weight="thin" size={28} color="currentColor" />
              </div>
              <NavLink
                to="/jsonified"
                title="jsonified"
                docs={sites}
                className="cursor-pointer rounded-md bg-[var(--d-gray)] px-0.5 hover:scale-125 transition-transform duration-200"
              >
                <BracketsCurly weight="thin" size={26} color="currentColor" />
              </NavLink>
            </div>
          </div>

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
