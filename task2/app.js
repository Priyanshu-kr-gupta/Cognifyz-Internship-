const express = require("express")
const app=express();
app.use(express.urlencoded({extended:true}))

app.set("view engine","ejs")
const port=5000;


app.get("/",(req,res)=>{
        res.render("index",{error:""});
})

app.post("/submit",async (req,res)=>{
        const { email, name, collegeName, studies, Faculty, Placement, rate, Review } = req.body;
        let error="";
        if (name === "") {
               error="name"
        }
        else if (collegeName === "") {
                error="college name"

        }
        else if (Review === "") {
                error="Review"
        }
        else if (studies === "" || Faculty === "" || Placement === "") {
                error = "rating"
            }
        else if (rate === null) {
                error="overall rating"
        
        }
        if (error != "") {
        
                return res.render("index", { error});
        }

        
        res.render("greetings",{data:req.body});

})


app.listen(port,()=>{
        console.log("server listning at "+port)
})