import axios from "axios";

const SITE_CAT_API_URL = import.meta.env.REACT_APP_API_URL + "/api/site_cat";

// MARK: GET
export async function getSiteCatByName(name = "") {
  let response = await axios
    .get(SITE_CAT_API_URL + "/name/" + name)
    .catch((err) => console.error(err));

  return validSiteCat(response);
}
export async function getAllSiteCats() {
  let response = await axios
    .get(SITE_CAT_API_URL)
    .catch((err) => console.error(err));

  return response.data.siteCats;
}

// MARK: VALIDATE RESPONSE
function validSiteCat(response = {}) {
  if (response.data.siteCats.length === 0) {
    console.error("Site Category Not Found");
    return 0;
  }

  if (response.data.siteCats.length > 1) {
    console.error("Multiple Site Categories Found");
    return 0;
  }

  return response.data.siteCats[0];
}
