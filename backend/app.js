import express from "express";
import session from "express-session";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import cors from 'cors'
const app = express();




const PORT = 3400;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,               
  methods: ['GET', 'POST' , 'DELETE'],        
}));

console.log(
  "==================================GoogleAuth================================"
);
import GooglePassport from "./authentication/GoogleAuthentication.js";
app.use(GooglePassport.initialize());
app.get(
  "/auth/google",
  GooglePassport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  GooglePassport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  function (req, res) {
    const token = jwt.sign({ user: req.user }, "8767854840", {
      expiresIn: "2h",
    });

    console.log(token);

    res.redirect(`http://localhost:5173?user=${token}`);
  }
);

console.log(
  "==================================GithHubAuth================================"
);
import GithubPassport from "./authentication/GithubAuthentication.js";
app.use(GithubPassport.initialize());
app.get(
  "/auth/github",
  GithubPassport.authenticate("github", { scope: ["user:email"] })
);

app.get(
  "/auth/github/callback",
  GithubPassport.authenticate("github", { failureRedirect: "/"  ,session:false}),
  (req, res) => {

    const token = jwt.sign({ user: req.user }, "8767854840", {
      expiresIn: "2h",
    });

    console.log(token);

    res.redirect(`http://localhost:5173?user=${token}`);
  }
);

import authRoutes from "./routes/auth.routes.js";

app.use("/api/v1/auth", authRoutes);

mongoose
  .connect("mongodb://127.0.0.1:27017/codingblocks", {
    appName: "CodingBlocks",
  })
  .then(() => {
    console.log("Connected To Db");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(PORT, () => {
  console.log("http://localhost:", PORT);
});
