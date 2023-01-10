const Form = require("../models/form.model");

exports.postWishes = async (req, res) => {
  const newData = await Form.create(req.body);

  if (!newData) {
    return res.status(400).json("there is error");
  }
  res.status(201).json(newData);
};

exports.getWishes = async (req, res) => {
  const { slug } = req.query;
  let datas;
  datas = Form.find();
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
