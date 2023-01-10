const Image = require("../models/image.model");

exports.postWishes = async (req, res) => {
  const newData = await Image.create(req.body);

  if (!newData) {
    return res.status(400).json("there is error");
  }
  res.status(201).json(newData);
};

exports.getWishes = async (req, res) => {
  const { slug } = req.query;
  let datas;
  datas = Image.find();
  if (slug) {
    datas = datas.find({ slug });
  }
  datas = await datas;

  if (!datas) {
    return res.status.json({
      status: "error",
      data: null,
    });
  }

  res
    .status(201)
    .json({ status: "success", result: datas.length, data: datas });
};

exports.getWish = async (req, res) => {
  // console.log(req.params);
  const datas = await Image.findById(req.params.id);
  // console.log("datas:", datas);

  if (!datas) {
    return res.status(400).json({
      status: "error",
      data: null,
    });
  }

  res.status(201).json({ status: "success", result: datas.length, datas });
};
