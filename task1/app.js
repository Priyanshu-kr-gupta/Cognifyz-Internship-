const express = require("express")
const app=express();
app.use(express.urlencoded({extended:true}))

app.set("view engine","ejs")
const port=5000;


app.get("/",(req,res)=>{
        res.render("index");
})

app.post("/submit",async (req,res)=>{
        res.render("greetings",{email:req.body.email,name:req.body.name,feedback:req.body.feedback});
})


app.listen(port,()=>{
        console.log("server listning at "+port)
})