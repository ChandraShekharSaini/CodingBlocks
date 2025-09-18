import Mentor  from "../model/mentorSchema.js";
import { otpgenerator } from "../utils/otpsender.js";
import { randomUserNameGenerator } from "../utils/randomUserNameGenerator.js";
import OtpMailer from "../Mailer/OtpMailer.js";
import redis from "../redis/redis.js";
import session from "express-session";

export const sendOTP = async (req, res) => {
  const { email } = req.body;

  console.log(email);

  const otp = otpgenerator();
  console.log(otp);
  await redis.set(`otp:${email}`, otp, "EX", 300);

  await OtpMailer(email, otp);

  res.status(201).json({
    message: "OTP send to Email",
    messageRedis: "OTP stored in Redis",
  });
};

export const verifyOTP = async (req, res) => {
  const { email, otp } = req.body;

  console.log(email, otp);

  const storedOtp = await redis.get(`otp:${email}`);

  if (storedOtp === otp) {
    console.log(otp);
    await redis.del(`otp:${email}`);

    const existedUser = await Mentor.findOne({ email });
    if (existedUser) {
      req.session.user = existedUser;

      console.log(req.session.user);

      return res.status(201).json({ success: true, message: "OTP verified " });
    } else {
      const randomUserName = randomUserNameGenerator(email, otp);

      const newUser = await Mentor.create({
        userName: randomUserName,
        email,
      });

      req.session.user = newUser;

      console.log("hjjhvh", req.session.user);
      console.log("hjjhvh", req.session);

      return res.status(201).json({ success: true, message: "OTP verified " });
    }
  }

  return res
    .status(400)
    .json({ success: false, message: "Invalid or expired OTP" });
};

export const logOut = async (req, res) => {
  console.log('===========================');
  console.log(req.session.user);
  try {
    if (req.session.user) {
      const user = req.session.user; 

      console.log(user);

      req.session.destroy((err) => {
        if (err) {
          console.log("Error destroying session:", err);
          return res
            .status(500)
            .json({ success: false, message: "Logout failed" });
        }

        res.clearCookie("connect.sid"); 
        return res.json({
          success: true,
          message: "Logged out successfully",
          user,
        });
      });
    } else {
      return res.json({ success: false, message: "No active session" });
    }
  } catch (error) {
    console.log("Logout error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};


