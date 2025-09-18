import express from "express";
const router = express.Router();

import {
  sendOTP,
  verifyOTP,
  logOut,

} from "../controller/authauthMentorController.controller.js";

router.post("/send-otp", sendOTP);
router.post("/verify-otp", verifyOTP);
router.post("/logout", logOut);


export default router;
