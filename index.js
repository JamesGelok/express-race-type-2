const express = require("express");
const app = express();
const stringifyObject = require("stringify-object");

const PORT = process.env.ENV_PORT || 3000;

app.get("*", (req, res) => {
  res.send(`Hello, ${stringifyObject(req.url)}`);
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
