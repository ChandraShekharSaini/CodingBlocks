import express from "express";
const router = express.Router();

import {
  coursePost,
  courseGet,
  courseDelete,
  courseUpdate,
} from "../controller/course.controller.js";

router.post("/post/course/:id", coursePost);
router.delete("/delete/course/:courseId", courseDelete);
router.put("/delete/course/:courseId", courseUpdate);
router.get("/get/course/:id", courseGet);

export default router;
