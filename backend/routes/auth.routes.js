import express from "express";
const router = express.Router();

import {
  SignIn,
  OtpVerification,
} from "../controller/authController.controller.js";

router.post("/user/signin", SignIn);
router.post("/user/otp", OtpVerification);

export default router;
