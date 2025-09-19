import express from "express";
import session from "express-session";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import cors from "cors";
import redis from "./redis/redis.js";

const app = express();
const PORT = 3400;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "DELETE"],
  })
);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 1000 * 60 * 60 * 24 },
  })
);

// ================== Google Auth ==================
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
    const token = jwt.sign({ user: req.user }, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });

    console.log(token);

    res.redirect(`http://localhost:5173?user=${token}`);
  }
);

// ================== Github Auth ==================
import GithubPassport from "./authentication/GithubAuthentication.js";
app.use(GithubPassport.initialize());

app.get(
  "/auth/github",
  GithubPassport.authenticate("github", { scope: ["user:email"] })
);

app.get(
  "/auth/github/callback",
  GithubPassport.authenticate("github", {
    failureRedirect: "/",
    session: false,
  }),
  (req, res) => {
    const token = jwt.sign({ user: req.user }, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });

    console.log(token);

    res.redirect(`http://localhost:5173?user=${token}`);
  }
);

// ================== Auth Routes ==================
import authMentorRoutes from "./routes/authMentor.routes.js";
import courseRoutes from "./routes/course.routes.js";
import authUserRoutes from "./routes/authUser.routes.js";
app.use("/api/v1/mentor/auth", authMentorRoutes);
app.use("/api/v2/mentor/course", courseRoutes);
app.use("/api/v3/user/auth", authUserRoutes);

// ================== DB Connection ==================
mongoose
  .connect("mongodb://127.0.0.1:27017/codingblocks", {
    appName: "CodingBlocks",
  })
  .then(() => {
    console.log("Connected To MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(PORT, () => {
  console.log("Server running at http://localhost:" + PORT);
});
