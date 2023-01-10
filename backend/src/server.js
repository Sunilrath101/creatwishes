const express = require("express");
const cors = require("cors");
const dbConnected = require("./config/db");
const formRouter = require("./routes/form.routes");
const imgRouter = require("./routes/image.routes");
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());
app.use("/form", formRouter);
app.use("/img", imgRouter);

app.all("*", (req, res) => {
  res.status(404).json({
    status: "error",
    data: "There is no page for this URL",
  });
});

dbConnected().then(() => {
  app.listen(PORT, async (err) => {
    if (err) {
      return console.error(err);
    }
    console.log(`Server listening on port ${PORT}`);
  });
});
