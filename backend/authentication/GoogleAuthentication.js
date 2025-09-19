import mongoose from "mongoose";
import passport from "passport";
import Mentor from "../model/mentorSchema.js";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    
    async function (accessToken, refreshToken, profile, cb) {

 
      try {
        const existingUser = await Mentor.findOne({ email:profile.emails[0].value});

        if (existingUser) {
          return cb(null, existingUser);
        }

        const newUser = await Mentor.create({
          name: profile.displayName,
          email: profile.emails[0].value,
          google: {
            googleId: profile.id,
            accessToken: accessToken,
            refreshToken: refreshToken,
            picture: profile.photos?.[0]?.value,
          },
        });

 
        return cb(null, newUser);

       
      } catch (error) {
        return cb(error, null);
      }
    }
  )
);

export default passport;
