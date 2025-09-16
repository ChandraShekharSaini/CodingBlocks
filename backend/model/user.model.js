import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  google: {
    accessToken: { type: String },
    refreshToken: { type: String },
    picture: {
      type: String,
    },
    googleId: {
      type: String,
     
      unique: true,
    },
  },


    github: {
    accessToken: { type: String },
    refreshToken: { type: String },
    picture: { type: String },
    githubId: {
      type: String,
      required: true,
      unique: true,
    },
  },
});

const User = mongoose.model("User", userSchema);

export default User;
