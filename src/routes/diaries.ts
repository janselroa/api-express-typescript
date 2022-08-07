import { Router } from "express";
const router = Router()
router.get("/",(_,res)=>{
    res.send("Fetching all entry diaires")
})
router.post("/",(_,res)=>{
    res.send("writing entry diaires")    
})
export default router