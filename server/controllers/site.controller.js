import db from "../db/connection.js";
import Site from "../models/site.model.js";

// MARK: GET
export async function getSites(filter = {}) {
  let collection = db.collection("sites");
  let sites = await collection.find(filter).toArray();

  if (!sites) {
    console.error("No sites found");
    return 0;
  }

  console.log("Sites Found");
  return sites;
}

// MARK: POST
export async function createSite(doc = {}) {
  let siteExists = await validateSiteExists(doc.name);
  if (siteExists) {
    console.error("Site Already Exists", doc);
    return 0;
  }

  try {
    const newSite = new Site(doc);
    const savedSite = await newSite.save();
    console.log("New site saved", savedSite);
  } catch (err) {
    console.error("Error saving new site", err);
  }
}

export async function addSite(doc = {}) {
  let siteExists = await validateSiteExists(doc.name);
  if (siteExists) {
    console.error("Site Already Exists", doc);
    return 0;
  }

  let collection = db.collection("sites");
  let results = await collection
    .insertOne(doc)
    .catch((err) => console.error(err))
    .finally(() => console.log("Site Added", doc));

  return results;
}

// MARK: VALIDATORS
export async function validateSiteExists(name = "") {
  let collection = db.collection("sites");
  let siteExists;
  try {
    siteExists = await collection.findOne({ name: name });
  } catch (err) {
    console.error(err);
  }
  if (siteExists) return 1;
  return 0;
}
