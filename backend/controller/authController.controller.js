import { otpgenerator } from "../utils/otpsender.js";
import OtpMailer from "../Mailer/OtpMailer.js";



export const SignIn = async (req, res, next) => {
  const { email } = req.body;

  const otp = otpgenerator();

  await OtpMailer(email , otp)
   console.log(otp);
  res.status(201).json({
    message: "Login Sucessfully",
  });
};


export const OtpVerification = async (req, res, next) => {
  const { otp } = req.body;


  console.log(otp);

  res.status(201).json({
    message: "OTP verification Done",

  });
};