import axios from "axios";
import { PropTypes } from "prop-types";
import { useState } from "react";

DeleteSiteForm.propTypes = {
  sites: PropTypes.array.isRequired,
  toggleDeleteSiteForm: PropTypes.func.isRequired,
};

export default function DeleteSiteForm({ sites, toggleDeleteSiteForm }) {
  const [siteId, setSiteId] = useState("");

  function submitDeleteSite(e) {
    e.preventDefault();

    if (siteId === "") {
      console.error("Please select a site to delete.");
      return;
    }

    axios
      .delete(import.meta.env.REACT_APP_API_URL + "/api/site/" + siteId)
      .then(() => {
        toggleDeleteSiteForm();
      })
      .catch((err) => console.error(err));
  }

  function cancelDeleteSiteForm(e) {
    e.preventDefault();
    toggleDeleteSiteForm();
  }

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 p-4 bg-[var(--green)] rounded-xl border-[1px] border-[var(--l-green)]">
      <div className="flex items-center justify-center text-3xl text-[var(--l-green)]">
        Delete Site Form
      </div>
      <div className="flex flex-col items-center justify-center text-xl">
        <select
          className="w-2/3 p-2 my-2 rounded-xl border-[1px] border-[var(--l-green)] cursor-pointer"
          value={siteId}
          onChange={(e) => setSiteId(e.target.value)}
        >
          {sites.map((site) => (
            <option key={site._id} value={site.name}>
              {site.name}
            </option>
          ))}
        </select>
        <button
          className="btn w-1/3 p-2 my-2 rounded-xl bg-[var(--l-red)] text-[var(--d-gray)] cursor-pointer"
          onClick={(e) => submitDeleteSite(e)}
        >
          Delete
        </button>
        <button
          className="btn w-1/3 p-2 my-2 rounded-xl bg-[var(--l-yellow)] text-[var(--green)] cursor-pointer"
          onClick={(e) => cancelDeleteSiteForm(e)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
