const express=require("express")
require('dotenv').config()
const app=express();
const port=process.env.port||4000;
const githubdata={
    "login":"fahad",
    "id":"02",
    "email":"fahad931@gmail.com"
}
app.get("/",(req,res)=>{
    res.send("fahad ali babar")

})
app.get("/login",(req,res)=>{
    res.send("fahad@gmail.com")

})
app.get("/github",(req,res)=>{
    res.json(githubdata)

})
app.listen(port,()=>{
    console.log("app is running on : ",port);
    
})