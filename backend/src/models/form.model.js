const mongoose = require("mongoose");

const wisheSchema = new mongoose.Schema({
  slug: { type: String, required: true },
  content_title: { type: String, required: true },
  content_title_para_1: { type: String, required: true },
  content_title_para_2: { type: String, required: true },
  content_title_subtitile: { type: String, required: true },
});

const Form = mongoose.model("Form", wisheSchema);

module.exports = Form;
