import CheckboxInputTemplate from "components/basic/CheckboxInputTemplate";
import ModalBackdrop from "components/basic/ModalBackdrop";
import SelectInputTemplate from "components/basic/SelectInputTemplate";
import TextInputTemplate from "components/basic/TextInputTemplate";
import { PropTypes } from "prop-types";
import { useState } from "react";
import { deleteSiteByName, updateSiteByName } from "services/SiteService";

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
    deleteSiteByName(selectedSiteName)
      .then(() => {
        toggleEditSiteForm();
      })
      .catch((err) => console.error(err));
  }

  function submitEditSite(e) {
    e.preventDefault();

    updateSiteByName(selectedSiteName, {
      name: name,
      url: url,
      cat: cat,
      iconSrc: iconSrc,
      subscribed: subscribed,
    })
      .then(() => {
        toggleEditSiteForm();
      })
      .catch((err) => console.error(err));
  }

  return (
    <>
      <ModalBackdrop />
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-1/2 py-4 px-2 bg-gradient-to-b from-[var(--black)] to-[var(--d-gray)] rounded-xl border-2 border-[var(--green)] z-10">
        <div className="flex items-center justify-center text-3xl text-[var(--white)] font-thin">
          EDIT SITE
        </div>
        <form
          className="flex flex-col items-center w-full mt-3 text-xl"
          onSubmit={submitEditSite}
        >
          <SelectInputTemplate
            label="site-select"
            value={selectedSiteName}
            items={sites}
            onStateChange={updateSelectedSite}
            color="green"
            required={true}
          />

          <TextInputTemplate
            label="name"
            value={name}
            onStateChange={setName}
            placeholder="Name"
            required={true}
          />
          <TextInputTemplate
            label="url"
            value={url}
            onStateChange={setUrl}
            placeholder="URL"
            required={true}
          />
          <TextInputTemplate
            label="cat"
            value={cat}
            onStateChange={setCat}
            placeholder="Category"
            required={true}
          />
          <TextInputTemplate
            label="iconSrc"
            value={iconSrc}
            onStateChange={seticonSrc}
            placeholder="src/assets/..."
          />

          <CheckboxInputTemplate
            label="subscribed"
            value={subscribed}
            onStateChange={setSubscribed}
            color="green"
          />

          <div className="flex w-full justify-evenly text-[var(--black)] text-2xl mt-6 mb-4 font-black">
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
