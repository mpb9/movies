import axios from "axios";
import { PropTypes } from "prop-types";
import { useState } from "react";
import ModalBackdrop from "../basic/ModalBackdrop";
import TextInput from "../basic/TextInput";

EditSiteForm.propTypes = {
  sites: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      cat: PropTypes.string.isRequired,
      iconSrc: PropTypes.string,
      subscribed: PropTypes.bool,
    })
  ).isRequired,
  toggleEditSiteForm: PropTypes.func.isRequired,
};

export default function EditSiteForm({ sites, toggleEditSiteForm }) {
  const [selectedSiteName, setSelectedSiteName] = useState(sites[0].name || "");
  const [name, setName] = useState(sites[0].name || "");
  const [url, setUrl] = useState(sites[0].url || "");
  const [cat, setCat] = useState(sites[0].cat || "");
  const [iconSrc, seticonSrc] = useState(sites[0].iconSrc || "");
  const [subscribed, setSubscribed] = useState(sites[0].subscribed || false);

  function cancelEditSiteForm(e) {
    e.preventDefault();
    toggleEditSiteForm();
  }

  function updateSelectedSite(e) {
    e.preventDefault();
    const site = sites.find((site) => site.name === e.target.value);
    setSelectedSiteName(site.name || "");
    setName(site.name || "");
    setUrl(site.url || "");
    setCat(site.cat || "");
    seticonSrc(site.iconSrc || "");
    setSubscribed(site.subscribed || false);
  }

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
        toggleEditSiteForm();
      })
      .catch((err) => console.error(err));
  }

  function submitEditSite(e) {
    e.preventDefault();
    if (selectedSiteName === "") {
      console.error("Please select a site to edit.");
      return;
    }
    try {
      if (name === "" || url === "" || cat === "") {
        throw new Error("name, url, and cat fields must be filled out.");
      }
    } catch (err) {
      console.error(err);
      return;
    }

    const site = sites.find((site) => site.name === selectedSiteName);
    if (site.subscribed === undefined && subscribed === false) {
      setSubscribed(null);
    }
    if (site.iconSrc === undefined && iconSrc === "") {
      seticonSrc(null);
    }

    console.log("data", {
      name: name,
      url: url,
      cat: cat,
      iconSrc: iconSrc,
      subscribed: subscribed,
    });
    axios
      .put(
        import.meta.env.REACT_APP_API_URL +
          "/api/site/name/" +
          selectedSiteName,
        {
          name: name,
          url: url,
          cat: cat,
          iconSrc: iconSrc,
          subscribed: subscribed,
        }
      )
      .then(() => {
        toggleEditSiteForm();
      })
      .catch((err) => console.error(err));
  }

  return (
    <>
      <ModalBackdrop />
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-1/2 py-4 px-2 bg-[var(--l-yellow)] rounded-xl border-2 border-[var(--green)] z-10">
        <div className="flex items-center justify-center text-3xl text-[var(--white)]">
          Edit Site
        </div>
        <form
          className="w-full flex flex-col items-center text-xl mt-3"
          onSubmit={submitEditSite}
        >
          <div className="w-2/5">
            <div className="relative">
              <select
                className="w-full pl-4 pr-8 py-2 my-2 mb-3 rounded-xl appearance-none border-[1px] border-[var(--l-green)] cursor-pointer bg-[var(--green)] text-[var(--white)]"
                value={selectedSiteName}
                onChange={updateSelectedSite}
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
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-9 w-8 ml-1 absolute top-[14px] right-1.5 text-[var(--white)]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                />
              </svg>
            </div>
          </div>

          <TextInput
            label="name"
            value={name}
            onStateChange={setName}
            placeholder="Name"
            required={true}
          />
          <TextInput
            label="url"
            value={url}
            onStateChange={setUrl}
            placeholder="URL"
            required={true}
          />
          <TextInput
            label="cat"
            value={cat}
            onStateChange={setCat}
            placeholder="Category"
            required={true}
          />
          <TextInput
            label="iconSrc"
            value={iconSrc}
            onStateChange={seticonSrc}
            placeholder="Icon Source"
          />

          <div className="inline-flex items-center my-2">
            <label
              className="flex items-center cursor-pointer relative"
              htmlFor="check-subscribed"
            >
              <input
                className="peer h-6 w-6 cursor-pointer transition-all bg-[var(--white)] appearance-none rounded shadow hover:shadow-md border border-[var(--l-green)] checked:bg-[var(--green)] checked:border-[var(--l-green)]"
                type="checkbox"
                checked={subscribed}
                id="check-subscribed"
                name="check-subscribed"
                onChange={(e) => setSubscribed(e.target.checked)}
              />
              <span className="absolute text-[var(--white)] opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </label>
            <label
              className="cursor-pointer ml-3 text-[var(--green)] font-bold"
              htmlFor="check-subscribed"
            >
              subscribed
            </label>
          </div>

          <div className="flex w-full justify-evenly text-[var(--white)] text-2xl mt-6 mb-2 font-black">
            <button
              className="btn cursor-pointer rounded-xl bg-[var(--orange)] p-1 px-2 hover:scale-105 transition-transform duration-300"
              onClick={(e) => cancelEditSiteForm(e)}
            >
              cancel
            </button>
            <input
              className="btn cursor-pointer rounded-xl bg-[var(--green)] p-1 px-4 hover:scale-105 transition-transform duration-300"
              type="submit"
              value="submit"
            />
            <button
              className="btn cursor-pointer rounded-xl bg-[var(--l-red)] p-1 px-2 hover:scale-105 transition-transform duration-300"
              onClick={(e) => submitDeleteSite(e)}
            >
              delete
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
