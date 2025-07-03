const axios = require("axios");

const EXECUTOR_URL = process.env.EXECUTOR_URL || "http://your-vps-ip:5000/execute";

async function runCode({ language, code, input = "" }) {
  const response = await axios.post(EXECUTOR_URL, {
    language,
    code,
    input,
  });

  return response.data;
}

module.exports = { runCode };
