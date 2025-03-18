import { ListPlus, Textbox } from "@phosphor-icons/react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { httpRequest } from "../services/GatewayService";
import AddSiteForm from "./forms/AddSiteForm";
import EditSiteForm from "./forms/EditSiteForm";

Category.propTypes = {
  name: PropTypes.string.isRequired,
};

export default function Category({ name }) {
  const [color, setColor] = useState(null);
  const [url, setUrl] = useState(null);
  const [navLink, setNavLink] = useState(null);
  const [sites, setSites] = useState([]);

  const [showAddSiteForm, setShowAddSiteForm] = useState(false);
  const [showEditSiteForm, setShowEditSiteForm] = useState(false);

  const categoryCss =
    "w-full relative flex flex-col items-center my-3 pt-2 p-1 rounded-xl bg-[var(--d-gray)] border-[1px]";

  const categoryTitleCss =
    "flex items-center justify-center text-3xl font-light underline-offset-8 uppercase pb-1";

  useEffect(() => {
    httpRequest("/api/site_cat/name/" + name)
      .then((res) => {
        setColor(res.siteCats[0].color);
        setUrl(res.siteCats[0].url);
        setNavLink(res.siteCats[0].navLink);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    httpRequest("/api/site/cat/" + name)
      .then((res) => {
        setSites(res.sites);
      })
      .catch((err) => console.error(err));
  }, [showAddSiteForm, showEditSiteForm]);

  function toggleAddSiteForm() {
    setShowAddSiteForm(!showAddSiteForm);
  }
  function toggleEditSiteForm() {
    setShowEditSiteForm(!showEditSiteForm);
  }

  return (
    <>
      <div className={categoryCss + " border-[var(--" + color + ")]"}>
        {url != null ? (
          <a
            className={
              categoryTitleCss +
              " text-[var(--l-" +
              color +
              ")] hover:underline"
            }
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            {name}
          </a>
        ) : (
          <>
            {navLink != null ? (
              <NavLink
                className={
                  categoryTitleCss +
                  " text-[var(--l-" +
                  color +
                  ")] hover:underline"
                }
                to={navLink}
              >
                {name}
              </NavLink>
            ) : (
              <div
                className={
                  categoryTitleCss +
                  " text-[var(--l-" +
                  color +
                  ")] cursor-default"
                }
              >
                {name}
              </div>
            )}
          </>
        )}

        <div className="flex flex-wrap items-center justify-evenly">
          {sites.map((site) => (
            <a
              key={site._id}
              className="text-[var(--gray)] text-2xl hover:underline p-1 mx-1"
              href={site.url}
              target="_blank"
              rel="noreferrer"
            >
              {site.name}
            </a>
          ))}
        </div>

        <div className="absolute top-1.5 right-2.5 flex items-center justify-end">
          <div
            className="cursor-pointer rounded-md bg-[var(--d-gray)] px-0.5 hover:scale-125 transition-transform duration-200 mr-1.5"
            onClick={toggleEditSiteForm}
          >
            <Textbox
              weight="duotone"
              size={32}
              color={"var(--" + color + ")"}
            />
          </div>
          <div
            className="cursor-pointer rounded-md bg-[var(--d-gray)] px-0.5 hover:scale-125 transition-transform duration-200"
            onClick={toggleAddSiteForm}
          >
            <ListPlus
              weight="duotone"
              size={28}
              color={"var(--" + color + ")"}
            />
          </div>
        </div>
      </div>
      {showAddSiteForm && (
        <AddSiteForm initialCat={name} toggleAddSiteForm={toggleAddSiteForm} />
      )}
      {showEditSiteForm && (
        <EditSiteForm sites={sites} toggleEditSiteForm={toggleEditSiteForm} />
      )}
    </>
  );
}
