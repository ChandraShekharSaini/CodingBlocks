import express from "express";
const router = express.Router();

import {
  sendOTP,
  verifyOTP,
  logOut,
  profileDetails,
} from "../controller/authController.controller.js";

router.post("/send-otp", sendOTP);
router.post("/verify-otp", verifyOTP);
router.post("/logout", logOut);
router.get("/profile", profileDetails);

export default router;
