import express from "express";

const app = express();

//routes
app.get("/", (req, res)=>{
    res.send("Hello Node API")

})

app.listen(3000, ()=>{
    console.log("Node Rest API is running on port 3000");
})



