import axios from "axios";
import { PropTypes } from "prop-types";
import { useState } from "react";

AddSiteForm.propTypes = {
  cat: PropTypes.string,
  toggleAddSiteForm: PropTypes.func.isRequired,
};

export default function AddSiteForm({ cat, toggleAddSiteForm }) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [siteCat, setSiteCat] = useState(cat);
  const [iconSrc, seticonSrc] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function submitSite(e) {
    e.preventDefault();

    try {
      if (name === "" || url === "" || siteCat === "") {
        throw new Error("All fields must be filled out.");
      }
    } catch (err) {
      console.error(err);
      return;
    }

    axios
      .post(import.meta.env.REACT_APP_API_URL + "/api/site", {
        name: name,
        url: url,
        cat: siteCat,
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
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 p-4 bg-[var(--green)] rounded-xl border-[1px] border-[var(--l-green)]">
      <div className="flex items-center justify-center text-3xl text-[var(--l-green)]">
        Add Site Form
      </div>
      <form
        className="w-full flex flex-col items-center text-xl"
        onSubmit={submitSite}
      >
        <input
          className="w-2/3 p-2 my-2 rounded-xl border-[1px] border-[var(--l-green)]"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-2/3 p-2 my-2 rounded-xl border-[1px] border-[var(--l-green)]"
          type="text"
          placeholder="URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <input
          className="w-2/3 p-2 my-2 rounded-xl border-[1px] border-[var(--l-green)]"
          type="text"
          placeholder="Category"
          value={siteCat}
          onChange={(e) => setSiteCat(e.target.value)}
        />
        <input
          className="w-2/3 p-2 my-2 rounded-xl border-[1px] border-[var(--l-green)]"
          type="text"
          placeholder="Icon Source"
          value={iconSrc}
          onChange={(e) => seticonSrc(e.target.value)}
        />

        <div className="inline-flex items-center my-2">
          <label
            className="flex items-center cursor-pointer relative"
            htmlFor="check-subscribed"
          >
            <input
              type="checkbox"
              checked={subscribed}
              className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-[var(--l-green)] checked:bg-[var(--l-green)] checked:border-[var(--l-green)]"
              id="check-subscribed"
              onChange={(e) => setSubscribed(e.target.checked)}
            />
            <span className="absolute text-[var(--white)] opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
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
          <label className="cursor-pointer ml-2" htmlFor="check-subscribed">
            Subscribed
          </label>
        </div>

        <input
          className="btn cursor-pointer rounded-xl bg-[var(--green)] p-1 mt-2 mb-2 hover:scale-105 transition-transform duration-300 text-2xl"
          type="submit"
          value="Submit"
        />
        <button
          className="btn cursor-pointer rounded-xl bg-[var(--l-yellow)] px-2 mt-1 hover:scale-105 transition-transform duration-300 text-[var(--green)]"
          onClick={(e) => cancelAddSiteForm(e)}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
