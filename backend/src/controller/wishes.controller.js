const Wish = require("../models/wishes.model");

exports.postWishes = async (req, res) => {
  // const {
  //   img_url,
  //   name,
  //   title,
  //   content_title,
  //   content_title_para_1,
  //   content_title_para_2,
  //   content_title_subtitile,
  // } = req.body;

  const newData = await Wish.create(req.body);

  if (!newData) {
    return res.status(400).json("there is error");
  }
  res.status(201).json(newData);
};

exports.getWishes = async (req, res) => {
  const { title } = req.query;
  let datas;
  datas = Wish.find();
  if (title) {
    datas = datas.find({ title });
  }
  datas = await datas;

  if (!datas) {
    return res.status.json({
      status: "error",
      data: null,
    });
  }

  res.status(201).json({ status: "success", result: datas.length, datas });
};
