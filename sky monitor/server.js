const express = require("express")
const fetch = require("node-fetch")
const app = express()

app.use(express.static("public"))

app.get("/planes", async (req,res)=>{

 try{

 const response = await fetch("https://opensky-network.org/api/states/all")
 const data = await response.json()

 res.json(data)

 }catch(e){

 res.json({error:"API error"})
 }

})

app.listen(3000,()=>{
 console.log("Sky Monitor running on port 3000")
})
