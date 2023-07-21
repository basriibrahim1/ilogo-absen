const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 5000;
const mainRoutes = require('./src/routes/mainRoutes')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// app.use(xss());

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use("/", mainRoutes);

app.use("/img", express.static("./tmp"));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "server are ready to use",
  });
});

app.listen(port, () => {
  console.log(`You are connected to port: ${port}`);
});