import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema(
  {
    name: { type: String, required: true },
    venue: { type: String, required: true },
    mentorName: { type: String, required: true },
    mentorImage: { type: String }, 
    startDate: { type: Date, required: true },
    endDate: { type: Date }, 
    scheduleDays: { type: String }, 
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    syllabus: { type: String, required: true },
    mentorRef: { type: String, required: true },
    discountedFee: { type: String },
    originalFee: { type: String },

  },
  { timestamps: true }
);


const Course = mongoose.model("Course", courseSchema);

export default Course;


  