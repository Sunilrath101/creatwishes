const mongoose = require("mongoose");

const imgSchema = new mongoose.Schema({
  img_url: { type: String, required: true },
  name: { type: String, required: true },
  title: { type: String, required: true },
  slug: { type: String, required: true },
});

const Image = mongoose.model("Image", imgSchema);

module.exports = Image;
