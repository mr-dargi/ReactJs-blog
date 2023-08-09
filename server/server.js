const express = require("express");

const app = express();

app.listen(8000);

app.get("/api", (req, res) => {
  res.json({ data: [1, 2, 3, 4, 5] })
})