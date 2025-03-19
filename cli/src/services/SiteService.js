import axios from "axios";

const SITE_API_URL = import.meta.env.REACT_APP_API_URL + "/api/site";

// MARK: GET
export async function getSiteByName(name = "") {
  let response = await axios
    .get(SITE_API_URL + "/name/" + name)
    .catch((err) => console.error(err));

  return validSite(response);
}
export async function getSitesByCat(cat = "") {
  let response = await axios
    .get(SITE_API_URL + "/cat/" + cat)
    .catch((err) => console.error(err));

  return validSites(response);
}
export async function getSitesBySubscribedAndCat(subscribed = 1, cat = "") {
  let response = await axios
    .get(SITE_API_URL + "/subscribed/" + subscribed + "/cat/" + cat)
    .catch((err) => console.error(err));

  return validSites(response);
}
export async function getAllSites() {
  let response = await axios
    .get(SITE_API_URL)
    .catch((err) => console.error(err));

  return validSites(response);
}

// MARK: POST
export async function addSite(doc = {}) {
  if (!validRequestBody(doc)) return;

  let response = await axios
    .post(SITE_API_URL, doc)
    .catch((err) => console.error(err));

  return response;
}

// MARK: PUT
export async function updateSiteByName(name = "", doc = {}) {
  if (!validSiteName(name) || !validRequestBody(doc)) return;

  let response = await axios
    .put(SITE_API_URL + "/name/" + name, doc)
    .catch((err) => console.error(err));

  return response;
}

// MARK: DELETE
export async function deleteSiteByName(name = "") {
  if (!validSiteName(name)) return;

  let response = await axios
    .delete(SITE_API_URL + "/name/" + name)
    .catch((err) => console.error(err));

  return response;
}

// MARK: VALIDATE PARAMS
function validRequestBody(doc = {}) {
  if (doc.name === "" || doc.url === "" || doc.cat === "") {
    console.error("doc.name, doc.url, or doc.cat not provided");
    return false;
  }
  return true;
}
function validSiteName(name = "") {
  if (name === "") {
    console.error("No site name provided");
    return false;
  }
  return true;
}

// MARK: VALIDATE RESPONSE
function validSite(response = {}) {
  if (response.data.sites.length === 0) {
    console.error("Site Not Found");
    return 0;
  }

  if (response.data.sites.length > 1) {
    console.error("Multiple Sites Found");
    return 0;
  }

  return response.data.sites[0];
}
function validSites(response = {}) {
  if (response.data.sites.length === 0) {
    console.error("Sites Not Found");
    return 0;
  }

  return response.data.sites;
}
