const express = require("express");
const cors = require("cors");
const dbConnected = require("./config/db");
const wishesRouter = require("./routes/wishes.routes");
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());
app.use("/", wishesRouter);

dbConnected().then(() => {
  app.listen(PORT, async (err) => {
    if (err) {
      return console.error(err);
    }
    console.log(`Server listening on port ${PORT}`);
  });
});
