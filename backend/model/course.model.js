import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema(
  {
    name: { type: String, required: true },
    venue: { type: String, required: true },
    mentorName: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    syllabus: { type: String, required: true },
    mentorRef: { type: String, required: true },
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);

export default Course;
