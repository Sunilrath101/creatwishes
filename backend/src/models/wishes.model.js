const mongoose = require("mongoose");

const wisheSchema = new mongoose.Schema({
  img_url: { type: String, required: true },
  name: { type: String, required: true },
  title: { type: String, required: true },
  slug: { type: String, required: true },
  content_title: { type: String, required: true },
  content_title_para_1: { type: String, required: true },
  content_title_para_2: { type: String, required: true },
  content_title_subtitile: { type: String, required: true },
});

const Wish = mongoose.model("Wish", wisheSchema);

module.exports = Wish;
