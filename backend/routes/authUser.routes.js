import express from "express";
const router = express.Router();

import { signIn, signUp } from "../controller/authMentor.controller.js";

router.post("/signup", signUp);
router.post("/signin", signIn);


export default router;
