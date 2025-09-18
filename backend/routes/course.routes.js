import express from "express";
const router = express.Router();

import {
  coursePost,
  courseGet,
  courseDelete,
  courseUpdate,
  courseGetOnline,
  courseGetClassroom,
} from "../controller/course.controller.js";

router.post("/post/course/:id", coursePost);
router.delete("/delete/course/:courseId", courseDelete);
router.put("/delete/course/:courseId", courseUpdate);
router.get("/get/course", courseGet);
router.get("/get/course/live", courseGetOnline);
router.get("/get/course/classroom", courseGetClassroom);

export default router;
