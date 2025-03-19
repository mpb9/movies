import { PropTypes } from "prop-types";
import { useState } from "react";
import { addSite } from "../../services/SiteService";
import CheckboxInputTemplate from "../basic/CheckboxInputTemplate";
import ModalBackdrop from "../basic/ModalBackdrop";
import TextInputTemplate from "../basic/TextInputTemplate";

AddSiteForm.propTypes = {
  initialCat: PropTypes.string,
  toggleAddSiteForm: PropTypes.func.isRequired,
};

export default function AddSiteForm({ initialCat, toggleAddSiteForm }) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [cat, setCat] = useState(initialCat);
  const [iconSrc, seticonSrc] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function submitAddSite(e) {
    e.preventDefault();

    addSite({
      name: name,
      url: url,
      cat: cat,
      iconSrc: iconSrc,
      subscribed: subscribed,
    }).then(
      (res) => {
        if (res === 0) return;
        toggleAddSiteForm();
      },
      (err) => {
        console.error(err);
      }
    );
  }

  function cancelAddSiteForm(e) {
    e.preventDefault();
    toggleAddSiteForm();
  }

  return (
    <>
      <ModalBackdrop />
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-1/2 p-4 bg-[var(--d-gray)] rounded-xl border-2 border-[var(--green)] z-10">
        <div className="flex items-center justify-center text-3xl text-[var(--white)]">
          Add Site
        </div>
        <form
          className="flex flex-col items-center w-full mt-3 text-xl"
          onSubmit={submitAddSite}
        >
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
            placeholder="Icon Source"
          />

          <CheckboxInputTemplate
            label="subscribed"
            value={subscribed}
            onStateChange={setSubscribed}
            color="green"
          />

          <div className="flex w-full justify-around text-[var(--white)] text-2xl mt-6 mb-4 font-black">
            <button
              className="btn cursor-pointer rounded-xl bg-[var(--orange)] p-1 px-3 hover:scale-105 transition-transform duration-300"
              onClick={(e) => cancelAddSiteForm(e)}
            >
              cancel
            </button>
            <input
              className="btn cursor-pointer rounded-xl bg-[var(--green)] p-1 px-4 hover:scale-105 transition-transform duration-300"
              id="submit"
              name="submit"
              type="submit"
              value="submit"
            />
          </div>
        </form>
      </div>
    </>
  );
}
