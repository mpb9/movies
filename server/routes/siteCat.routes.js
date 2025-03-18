import express from "express";
import {
  addSiteCat,
  createSiteCat,
  getSiteCats,
} from "../controllers/siteCat.controller.js";
import { initialSiteCatColl } from "../models/data/siteCat.data.js";
import { HttpStatusCode } from "./util/httpStatus.js";

const router = express.Router();

// MARK: GET
// info: All site categories
router.get("/", async (req, res) => {
  let siteCats = await getSiteCats();

  if (!siteCats)
    res.status(HttpStatusCode.NotFound).json("No site categories found");
  else res.status(HttpStatusCode.Ok).json({ siteCats });
});

// info: By name
router.get("/:name", async (req, res) => {
  const filter = { name: req.params.name };
  let siteCats = await getSiteCats(filter);

  if (!siteCats)
    res.status(HttpStatusCode.NotFound).json("No site categories found");
  else res.status(HttpStatusCode.Ok).json({ siteCats });
});

// MARK: POST
// info: Add Site Category
router.post("/", async (req, res) => {
  let results = await addSiteCat(req.body);
  if (!results)
    res.status(HttpStatusCode.Conflict).json("Site Category Already Exists");
  else res.status(HttpStatusCode.Created).json(req.body);
});

// info: Create coll
router.post("/create", async (req, res) => {
  if (req.body.coll) {
    initialSiteCatColl.push(...req.body);
  }

  let results;

  try {
    results = await createSiteCat(initialSiteCatColl.pop());
  } catch (err) {
    console.error(err);
    res
      .status(HttpStatusCode.NotAcceptable)
      .json("Failed to initialize site categories collection");
  }

  initialSiteCatColl.forEach((doc) => {
    try {
      results = addSiteCat(doc);
      if (!results)
        res
          .status(HttpStatusCode.Conflict)
          .json("Site Category Already Exists");
    } catch (err) {
      console.error(err);
    }
  });

  res.status(HttpStatusCode.Created).json(req.body);
});

export default router;
