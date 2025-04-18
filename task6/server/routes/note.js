const express=require('express');
const router=express.Router();
const Post=require('../models/Note');
const Note = require('../models/Note');

router.post('/saveContent', async (req, res) => {
  try {
    const { uid, content, date } = req.body;
    const note = await Note.findOneAndUpdate(
      { user: uid, date: date },
      { $set: { content: content, date: date } },
      { upsert: true, new: true }
    );

    res.json({ status: "ok", note });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ msg: "Internal server error occurred" });
  }
});

router.get("/getNote", async (req, res) => {
  try {
    const uid = req.query.uid;
    const date = req.query.date;
    let note = await Note.findOne({user:uid,date});
    if (!note) {
      note = await Note.create({ user: uid, date, content: '' });
    }

    res.json(note);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch note" });
  }
});

router.get("/getAllNote", async (req, res) => {
  try {
    const uid=req.query.uid;
    const notes=await Post.find({user:uid}).sort({date:1});
    
    res.json(notes);
  } catch (error) {
    res.status(404).send({ error: "No notes found for this user" });
  }
});
module.exports=router
