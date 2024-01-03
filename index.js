const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const routes = require("./src/Routes/routes");

//db
mongoose
  .connect("mongodb://localhost:27017/fileSharing")
  .then(() => console.log("DB connected"))
  .catch((e) => console.log(e));

//routes
// app.get("/", (req, res) => {
//   res.send("Anil kumar nayak ");
// });

app.use("/", routes);

app.listen(8000, () => {
  console.log("app running at 8000");
});
