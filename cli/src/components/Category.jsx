import { Minus, Plus, SortAscending } from "@phosphor-icons/react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { httpRequest } from "../services/GatewayService";
import AddSiteForm from "./forms/AddSiteForm";
import DeleteSiteForm from "./forms/DeleteSiteForm";

Category.propTypes = {
  name: PropTypes.string.isRequired,
};

export default function Category({ name }) {
  const [color, setColor] = useState(null);
  const [url, setUrl] = useState(null);
  const [sites, setSites] = useState([]);
  const [showAddSiteForm, setShowAddSiteForm] = useState(false);
  const [showDeleteSiteForm, setShowDeleteSiteForm] = useState(false);

  const categoryCss =
    "w-full flex flex-col items-center my-3 p-2 rounded-xl bg-[var(--d-gray)] border-[1px] hover:scale-105 transition-transform duration-300";

  const categoryTitleCss =
    "flex items-center justify-center text-3xl font-light underline-offset-8 uppercase pb-1";

  useEffect(() => {
    httpRequest("/api/site_cat/" + name)
      .then((res) => {
        setColor(res.siteCats[0].color);
        setUrl(res.siteCats[0].url);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    httpRequest("/api/site/cat/" + name)
      .then((res) => {
        setSites(res.sites);
      })
      .catch((err) => console.error(err));
  }, [showAddSiteForm, showDeleteSiteForm]);

  function toggleAddSiteForm() {
    setShowAddSiteForm(!showAddSiteForm);
  }
  function toggleDeleteSiteForm() {
    setShowDeleteSiteForm(!showDeleteSiteForm);
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
          <div className={categoryTitleCss + " text-[var(--l-" + color + ")]"}>
            {name}
          </div>
        )}

        <div className="flex flex-wrap items-center justify-evenly">
          {sites.map((site) => (
            <a
              key={site._id}
              className="text-[var(--gray)] text-2xl font-bold hover:underline p-1 m-1"
              href={site.url}
              target="_blank"
              rel="noreferrer"
            >
              {site.name}
            </a>
          ))}
        </div>

        <div className="w-full flex items-end justify-end">
          <div className="btn cursor-pointer rounded-md bg-[var(--d-gray)] mr-2">
            <SortAscending
              weight="thin"
              size={28}
              color={"var(--" + color + ")"}
              onClick={toggleAddSiteForm}
            />
          </div>
          <div className="btn cursor-pointer rounded-md bg-[var(--d-gray)] mr-2">
            <Plus
              weight="thin"
              size={28}
              color={"var(--" + color + ")"}
              onClick={toggleAddSiteForm}
            />
          </div>
          <div className="btn cursor-pointer rounded-md bg-[var(--d-gray)]">
            <Minus
              weight="thin"
              size={28}
              color={"var(--" + color + ")"}
              onClick={toggleDeleteSiteForm}
            />
          </div>
        </div>
      </div>
      {showAddSiteForm && (
        <AddSiteForm cat={name} toggleAddSiteForm={toggleAddSiteForm} />
      )}
      {showDeleteSiteForm && (
        <DeleteSiteForm
          sites={sites}
          toggleDeleteSiteForm={toggleDeleteSiteForm}
        />
      )}
    </>
  );
}
