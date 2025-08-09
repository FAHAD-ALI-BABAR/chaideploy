const express=require("express")
require('dotenv').config()
const app=express();
const port=process.env.port||4000;
app.get("/",(req,res)=>{
    res.send("fahad ali babar")

})
app.get("/login",(req,res)=>{
    res.send("fahad@gmail.com")

})
app.listen(port,()=>{
    console.log("app is running on : ",port);
    
})