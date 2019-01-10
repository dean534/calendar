//必須等到build後才可以使用
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const process = require("process");
const port = process.env.PORT || 3000;

const notes = require("./routes/api/notes");

//bodyparse
app.use(express.json({
  useNewUrlParser: true }));

//DB config
mongoose
  .connect(require("./config/key").mongoUrl)
  .then(() => console.log("mongodb is connected..."))
  .catch(e => console.log(e));

// Use Route 
app.use("/api/notes", notes);

app.listen(port, () => console.log(`Server is prepareing at ${port}`));
