import express from "express";
const router = express.Router();
import { signup, signin } from "./../controller/users";


router.post('/signup',signup);

router.post('/signin',signin);


module.exports = router;