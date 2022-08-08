import { Router } from "express";
import getData from "../services/diaries"
const router = Router()
router.get("/",(_,res)=>{
    res.json(getData())
})
router.post("/",(_,res)=>{
        res.send("tal")
})
export default router