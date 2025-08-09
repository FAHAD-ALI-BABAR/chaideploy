const express=require("express")
require('dotenv').config()
const app=express();
const port=4000;
app.get("/",(req,res)=>{
    res.send("fahad ali babar")

})
app.get("/login",(req,res)=>{
    res.send("fahad@gmail.com")

})
app.listen(process.env,()=>{
    console.log("app is running on : ",process.env.port);
    
})