const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(morgan("combine"));
app.use(bodyParser.json());
app.use(cors());

app.get("/status", (req, res) => {
  res.send({
    message: "hello world!",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
