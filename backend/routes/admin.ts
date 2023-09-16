import express from "express";
import { authAdmin } from "../controller/admin";
const router = express.Router();


router.post('/signinadmin',authAdmin);







module.exports = router;