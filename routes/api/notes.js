const express = require("express");
const router = express.Router();

//Note Model
const Note = require("../../models/note");

// @route GET api/item/:month
// @desc get month notes
// @access public
router.get("/:month", (req, res) => {
  Note.find({ date: new RegExp(req.params.month) }).then(note =>
    res.json(note)
  );
});

// @route POST api/item/:month
// @desc create notes
// @access public
router.post("/", (req, res) => {
  const newNote = new Note({
    date: req.body.date,
    title: req.body.title,
    detail: req.body.detail
  });
  newNote.save().then(note => res.json(note));
});

// @route PUT api/item/:month
// @desc update notes
// @access public
router.put("/:id", (req, res) => {
  Note.findById(req.params.id)
    .then(note =>
      note
        .updateOne({
          date: req.body.date,
          title: req.body.title,
          detail: req.body.detail
        })
        .then(() => res.json({ success: true }))
    )
    .catch(e => res.status(404).json({ success: false }));
});
// @route DELETE api/item/:month
// @desc delete notes
// @access public
router.delete("/:id", (req, res) => {
  Note.findById(req.params.id)
    .then(note => note.remove().then(() => res.json({ success: true })))
    .catch(e => res.status(404).json({ success: false }));
});

module.exports = router;
