const express=require('express');
const router=express.Router();
const Post=require('../models/Note');
const Note = require('../models/Note');

router.post('/saveContent',async (req,res)=>{
  const today=new Date;
  const d=(today.getDate()+"-"+(today.getMonth()+1)+"-"+today.getFullYear())

    try {
        const {uid,content}=req.query    
        // console.log(uid,content,d)
        const note=await Note.updateOne(
            {user:uid,date:d},
            {$set:{content:content,date:d}},
            {upsert:true}

          )
          // console.log(note)
        // const savednote= await note.save()
          
        res.json({status:"ok"})
    } catch (error) {
        console.log(error.message)
        res.status(500).send({msg:"Internal server error occured"})
    }
  

})

router.post("/getNote", async (req, res) => {
  try {
    const uid=req.query.uid;
    const notes = await Post.find({user:uid,date:req.query.date });
  // console.log(notes)
 
    res.json(notes);
  } catch (error) {
    res.status(404).send({ error: "No notes found for this user" });
  }
});

router.post("/getAllNote", async (req, res) => {
  try {
    const today=new Date;
  const d=today.getDate()+"-"+(today.getMonth()+1)+"-"+today.getFullYear()
    const uid=req.query.uid;
    // console.log(uid,req.query.date)
    const notes = await Post.find({user:uid});
    res.json(notes);
  } catch (error) {
    res.status(404).send({ error: "No notes found for this user" });
  }
});
module.exports=router
