import axios from "axios";
import { PropTypes } from "prop-types";
import { useState } from "react";

DeleteSiteForm.propTypes = {
  sites: PropTypes.array.isRequired,
  toggleDeleteSiteForm: PropTypes.func.isRequired,
};

export default function DeleteSiteForm({ sites, toggleDeleteSiteForm }) {
  const [selectedSiteName, setSelectedSiteName] = useState(sites[0].name);

  function submitDeleteSite(e) {
    e.preventDefault();

    if (selectedSiteName === "") {
      console.error("Please select a site to delete.");
      return;
    }

    axios
      .delete(
        import.meta.env.REACT_APP_API_URL + "/api/site/name/" + selectedSiteName
      )
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
        <div className="w-2/3 mt-3 mb-2">
          <div className="relative">
            <select
              className="w-full pl-3 pr-8 py-2 my-2 rounded-xl appearance-none border-[1px] border-[var(--l-green)] cursor-pointer"
              value={selectedSiteName}
              onChange={(e) => setSelectedSiteName(e.target.value)}
            >
              {sites.map((site) => (
                <option key={site._id} value={site.name}>
                  {site.name}
                </option>
              ))}
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.2}
              stroke="currentColor"
              className="h-9 w-8 ml-1 absolute top-[13px] right-1.5 text-[var(--l-green)]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
              />
            </svg>
          </div>
        </div>

        <button
          className="btn cursor-pointer rounded-xl bg-[var(--l-red)] p-1 px-2 mt-2 mb-2 hover:scale-105 transition-transform duration-300 text-2xl text-[var(--green)]"
          onClick={(e) => submitDeleteSite(e)}
        >
          Delete
        </button>
        <button
          className="btn cursor-pointer rounded-xl bg-[var(--l-yellow)] px-2 mt-1 hover:scale-105 transition-transform duration-300 text-[var(--green)]"
          onClick={(e) => cancelDeleteSiteForm(e)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
