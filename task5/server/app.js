const express = require("express")
const cors=require('cors')
const app=express();
const fs = require("fs");
app.use(express.urlencoded({extended:true}))
app.use(
        cors({
          origin: "*"
        })
      );
const port=5000;


app.get("/",(req,res)=>{
        
        const content=fs.readFileSync("db.json","utf-8",(err,data)=>{});
        const dt=JSON.parse(content);
        res.json(dt);
})

app.post("/submit",async (req,res)=>{
        const { registration, name, course} = req.query;
        let error="";
        if (name === "") {
               error="add name"
        }
        else if (course === "") {
                error="add course"

        }
        if (error != "") {
        
                 res.json( {error});
        }

        const dataToSave = {
                registration,
                name,
                course,
            };
            console.log(dataToSave)

            const content=fs.readFileSync("db.json","utf-8",(err,data)=>{
                console.log(data)
            });
            const data=JSON.parse(content);
            
            data.push(dataToSave);
            console.log(data)
            fs.writeFile("db.json", JSON.stringify(data) , (err) => {
                if (err) {
                        console.log(err)
                }
                else
                        res.json({status:"ok"})
                })
            


})
app.post("/delete",async (req,res)=>{
        const { registration} = req.query;
            const content=fs.readFileSync("db.json","utf-8",(err,data)=>{
                console.log(data)
            });
            const data=JSON.parse(content);
            const newdata=data.filter(obj=> obj.registration != registration)
            
            fs.writeFile("db.json", JSON.stringify(newdata) , (err) => {
                if (err) {
                        console.log(err)
                }
                else
                        res.json({status:"ok"})
                })
            


})
app.get("/update",async (req,res)=>{
        const { registration, name, course} = req.query;
        let error="";
        if (name === "") {
               error="add name"
        }
        else if (course === "") {
                error="add course"

        }
        if (error != "") {
        
                 res.json( {error});
        }

       
            const content=fs.readFileSync("db.json","utf-8",(err,data)=>{
                console.log(data)
            });
            const data=JSON.parse(content);
            const newdata=data.map((val)=>{
                if(val.registration==registration)
                        {
                                val.name=name;
                                val.course=course;
                        }

                return val;
            })

            
            fs.writeFile("db.json", JSON.stringify(newdata) , (err) => {
                if (err) {
                        console.log(err)
                }
                else
                        res.json({status:"ok"})
                })
            


})

app.listen(port,()=>{
        console.log("server listning at "+port)
})