import express from "express";
import diariesRouter from "./routes/diaries"
const app = express()
const PORT = 3000
app.use(express.json())

app.use("/api/diaries",diariesRouter)

app.get("/",(_,res)=>{
    console.log("PING")
    res.send("PING")
})

app.listen(PORT,()=>console.log(`application running on port ${PORT}`))