import axios from "axios";
import { getSiteCatByName } from "./SiteCatService";

const COLOR_API_URL = import.meta.env.REACT_APP_API_URL + "/api/color";

// MARK: GET
export async function getAllColors() {
  let response = await axios
    .get(COLOR_API_URL)
    .catch((err) => console.error(err));

  return response.data.colors;
}
export async function getColorByName(name = "") {
  if (!validColorName(name)) return;

  let response = await axios
    .get(COLOR_API_URL + "/name/" + name)
    .catch((err) => console.error(err));

  return validColor(response);
}
export async function getColorFromSiteCatName(siteCatName = "") {
  let siteCat = await getSiteCatByName(siteCatName);
  if (!siteCat) return;

  let response = await axios
    .get(COLOR_API_URL + "/name/" + siteCat.color)
    .catch((err) => console.error(err));

  return validColor(response);
}

// MARK: VALIDATE PARAMS
function validColorName(name = "") {
  if (name === "") {
    console.error("Invalid Color Name");
    return 0;
  }

  return 1;
}

// MARK: VALIDATE RESPONSE
function validColor(response = {}) {
  if (response.data.colors.length === 0) {
    console.error("Color Not Found");
    return 0;
  }

  if (response.data.colors.length > 1) {
    console.error("Multiple Colors Found");
    return 0;
  }

  return response.data.colors[0];
}
