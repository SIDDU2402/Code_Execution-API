const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { runCode } = require("./code_runner");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/run", async (req, res) => {
  const { language, code, input } = req.body;

  try {
    const result = await runCode({ language, code, input });
    res.json(result);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
});

app.listen(3000, () => {
  console.log("Judge API running at http://localhost:3000");
});
