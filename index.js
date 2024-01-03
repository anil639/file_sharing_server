const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Anil kumar nayak ");
});

app.listen(8000, () => {
  console.log("app running at 8000");
});
