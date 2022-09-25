const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json({ message: "Connected Circularity Backend up and running!" });
});
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
