const express= require("express")
const app = express()
app.get("/ping",(req,res)=>{
    res.send("Started express,lets wait and see")
})


app.listen(3000,()=>{console.log("Server started on port 3000")})
