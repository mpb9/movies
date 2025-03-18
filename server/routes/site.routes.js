import express from "express";
import {
  addSite,
  createSite,
  getSites,
} from "../controllers/site.controller.js";
import db from "../db/connection.js";
import { initialSiteColl } from "../models/data/site.data.js";
import { HttpStatusCode } from "./util/httpStatus.js";

const router = express.Router();

// MARK: GET
// info: All sites
router.get("/", async (req, res) => {
  let sites = await getSites();

  if (!sites) res.status(HttpStatusCode.NotFound).json("No sites found");
  else res.status(HttpStatusCode.Ok).json({ sites });
});

// info: Subscribed sites
router.get("/subscribed", async (req, res) => {
  const filter = { subscribed: true };
  let sites = await getSites(filter);

  if (!sites) res.status(HttpStatusCode.NotFound).json("No sites found");
  else res.status(HttpStatusCode.Ok).json({ sites });
});

// info: Sites by category
router.get("/cat/:cat", async (req, res) => {
  const filter = { cat: req.params.cat };
  let sites = await getSites(filter);

  if (!sites) res.status(HttpStatusCode.NotFound).json("No sites found");
  else res.status(HttpStatusCode.Ok).json({ sites });
});

// info: Sites by subscribed and category
router.get("/subscribed/cat/:cat", async (req, res) => {
  const filter = { cat: req.params.cat, subscribed: true };
  let sites = await getSites(filter);

  if (!sites) res.status(HttpStatusCode.NotFound).json("No sites found");
  else res.status(HttpStatusCode.Ok).json({ sites });
});

// MARK: POST
// info: Add Site
router.post("/", async (req, res) => {
  let results = await addSite(req.body);
  if (!results) res.status(HttpStatusCode.Conflict).json("Site Already Exists");
  else res.status(HttpStatusCode.Created).json(req.body);
});

// info: Create coll
router.post("/create", async (req, res) => {
  if (req.body.coll) {
    initialSiteColl.push(...req.body);
  }

  let results;

  try {
    results = await createSite(initialSiteColl.pop());
  } catch (err) {
    console.error(err);
    res
      .status(HttpStatusCode.NotAcceptable)
      .json("Failed to initialize site collection");
  }

  initialSiteColl.forEach((doc) => {
    try {
      results = addSite(doc);
      if (!results)
        res.status(HttpStatusCode.Conflict).json("Site Already Exists");
    } catch (err) {
      console.error(err);
    }
  });
  res.status(HttpStatusCode.Created).json(req.body);
});

// MARK: PUT

// MARK: DELETE
// info: Delete site by name
router.delete("/:name", async (req, res) => {
  let collection = db.collection("sites");
  let results = await collection.deleteOne({ name: req.params.name });

  if (!results) res.status(HttpStatusCode.NotFound).json("Site not found");
  else res.status(HttpStatusCode.Ok).json("Site deleted");
});

// info: Delete all sites
router.delete("/", async (req, res) => {
  let collection = db.collection("sites");
  let results = await collection.deleteMany();

  if (!results) res.status(HttpStatusCode.NotFound).json("No sites found");
  else res.status(HttpStatusCode.Ok).json("All sites deleted");
});

export default router;
