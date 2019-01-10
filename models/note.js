const mongoose = require("mongoose");

//create schemma
const NoteSchema = new mongoose.Schema({
  date: {
    type: String,
    require: true
  },
  title: {
    type: String,
    require: true
  },
  detail: {
    type: String,
    require: true
  },
  UpdateDate: {
    type: Date,
    default: Date.now
  }
});
const Note = mongoose.model("Note", NoteSchema);
module.exports = Note;
