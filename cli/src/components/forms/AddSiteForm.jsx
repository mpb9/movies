import axios from "axios";
import { PropTypes } from "prop-types";
import { useState } from "react";
import ModalBackdrop from "../basic/ModalBackdrop";
import TextInput from "../basic/TextInput";

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

    try {
      if (name === "" || url === "" || cat === "") {
        throw new Error("name, url, and cat fields must be filled out.");
      }
    } catch (err) {
      console.error(err);
      return;
    }

    if (subscribed === false) {
      setSubscribed(null);
    }
    if (iconSrc === "") {
      seticonSrc(null);
    }

    axios
      .post(import.meta.env.REACT_APP_API_URL + "/api/site", {
        name: name,
        url: url,
        cat: cat,
        iconSrc: iconSrc,
        subscribed: subscribed,
      })
      .then(() => {
        toggleAddSiteForm();
      })
      .catch((err) => console.error(err));
  }

  function cancelAddSiteForm(e) {
    e.preventDefault();
    toggleAddSiteForm();
  }

  return (
    <>
      <ModalBackdrop />
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-1/2 p-4 bg-[var(--l-yellow)] rounded-xl border-2 border-[var(--green)] z-10">
        <div className="flex items-center justify-center text-3xl text-[var(--white)]">
          Add Site
        </div>
        <form
          className="w-full flex flex-col items-center text-xl mt-3"
          onSubmit={submitAddSite}
        >
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

          <div className="flex w-full justify-around text-[var(--white)] text-2xl mt-6 mb-2 font-black">
            <button
              className="btn cursor-pointer rounded-xl bg-[var(--orange)] p-1 px-3 hover:scale-105 transition-transform duration-300"
              onClick={(e) => cancelAddSiteForm(e)}
            >
              cancel
            </button>
            <input
              className="btn cursor-pointer rounded-xl bg-[var(--green)] p-1 px-4 hover:scale-105 transition-transform duration-300"
              type="submit"
              value="submit"
            />
          </div>
        </form>
      </div>
    </>
  );
}
