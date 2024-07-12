import express from "express";
import mongoose from "mongoose";

const app = express();

//routes
app.get("/", (req, res)=>{
    res.send("Hello Node API")

})

app.get("/blog", (req, res)=>{
    res.send("Node JS run from blog");
})

app.listen(3001, ()=>{
    console.log("Node Rest API is running on port 3000");
})

mongoose.connect("mongodb+srv://aashishg5111:!Dns.DSe5n2ekuH@techapi.gpwoxof.mongodb.net/node-restapi?retryWrites=true&w=majority&appName=TechAPI")
.then(()=>{
    console.log("connected to MongoDB");
    app.listen(3000, ()=>{
        console.log("Node Rest API is running on port 3000");
    })
}).catch((error)=>{
    console.log(error);
})


                                        



