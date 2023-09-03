import express from "express";
const router = express.Router();
import { signup } from "./../controller/users";


router.post('/signup',signup);

module.exports = router;