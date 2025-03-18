import mongoose from "mongoose";

const siteCatSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: false,
  },
  url: {
    type: String,
    required: false,
  },
  navLink: {
    type: String,
    required: false,
  },
});

const SiteCat = mongoose.model("SiteCat", siteCatSchema);

export default SiteCat;
