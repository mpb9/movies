import db from "../db/connection.js";
import SiteCat from "../models/siteCat.model.js";

// MARK: GET
export async function getSiteCats(filter = {}) {
  let collection = db.collection("sitecats");
  let siteCats = await collection.find(filter).toArray();

  if (!siteCats) {
    console.error("No site categories found");
    return 0;
  }

  console.log("Site Categories Found");
  return siteCats;
}

// MARK: POST
export async function createSiteCat(doc = {}) {
  let siteCatExists = await validateSiteCatExists(doc.name);
  if (siteCatExists) {
    console.error("Site Category Already Exists");
    return 0;
  }

  try {
    const newSiteCat = new SiteCat(doc);
    const savedSiteCat = await newSiteCat.save();
    console.log("New site category saved", savedSiteCat);
  } catch (err) {
    console.error("Error saving new site category", err);
  }
}

export async function addSiteCat(doc = {}) {
  let siteCatExists = await validateSiteCatExists(doc.name);
  if (siteCatExists) {
    console.error("Site Category Already Exists", doc);
    return 0;
  }

  let collection = db.collection("sitecats");
  let results = await collection
    .insertOne(doc)
    .catch((err) => console.error(err))
    .finally(() => console.log("Site Category Added"));

  return results;
}

// MARK: VALIDATORS
export async function validateSiteCatExists(name = "") {
  let collection = db.collection("sitecats");
  let siteCatExists;
  try {
    siteCatExists = await collection.findOne({ name: name });
  } catch (err) {
    console.error(err);
  }
  if (siteCatExists) return 1;
  return 0;
}
