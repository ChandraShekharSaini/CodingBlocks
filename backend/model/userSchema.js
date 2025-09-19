import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
  },

  userName: {
    type: String,
    unique: true,
  },

  password: {
    type: String,
    unique: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  profileUrl: {
    type: String,
    default: "https://cdn-icons-png.flaticon.com/512/4140/4140037.png",
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

      unique: true,
    },
  },
});

const User = mongoose.model( "user",userSchema);

export default User;
