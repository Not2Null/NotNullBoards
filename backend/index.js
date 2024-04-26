const express = require("express");
require("dotenv").config();
const app = express();

require('./models/db')
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`connecting server on ${PORT}`);
});
