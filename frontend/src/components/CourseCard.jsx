// CourseProvider.jsx
import axios from "axios";
import { createContext, useState, useEffect } from "react";

// Create Context
export const CourseContext = createContext([]);

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCourseData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3400/api/v2/mentor/course/get/course"
        );
        setCourses(response.data.data); // your array
      } catch (error) {
        console.error("Error fetching course data:", error);
      } finally {
        setLoading(false);
      }
    };

    getCourseData();
  }, []);



  const courseData = {
  features: [
    "10 live projects",
    "Covers Foundation, Basic & Advanced",
    "4-5 months duration",
    "Personal mentoring, progress tracking & feedback",
    "Certificate of Completion",
    "Priority Doubt Support",
    "Placement Assistance",
    "Free Backpack",
    "Free Access to Online Course"
  ]

};

  if (loading) return <p className="text-center text-white">Loading...</p>;

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {courses.map((course, index) => (
        <div
          key={index}
          className="bg-gray-900 text-white rounded-2xl shadow-lg w-full max-w-md mx-auto"
        >
          {/* Location + Start Date */}
          <div className="flex justify-between items-center px-4 py-2 text-sm text-gray-300">
            <span className="bg-yellow-600 text-white px-3 py-1 rounded-full">
              {course.venue}
            </span>
            <span>Starts {new Date(course.startDate).toLocaleDateString()}</span>
          </div>

          {/* Course Title */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-3 rounded-t-2xl">
            <h2 className="text-xl font-semibold">{course.name}</h2>
          </div>

          {/* Mentor Info */}
          <div className="flex items-center gap-4 px-4 py-3">
            <img
              src={course.mentorImage}
              alt={course.mentorName}
              className="w-16 h-16 rounded-full border-2 border-gray-600"
            />
            <div>
              <p className="text-base font-medium">{course.mentorName}</p>
              <p className="text-sm text-gray-400">{course.organization}</p>
            </div>
          </div>

          {/* Schedule */}
          <div className="px-4 py-2 text-sm bg-gray-800">
            Schedule: {course.scheduleDays} ({course.startTime} -{" "}
            {course.endTime})
          </div>

          {/* Course Features */}
          <div className="grid grid-cols-2 gap-3 px-4 py-4 text-sm text-gray-300">
            {courseData.features?.map((feature, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-green-400">✔</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Price + Enroll Button */}
          <div className="px-4 py-4 border-t border-gray-700 flex flex-col gap-2">
            <p className="text-pink-400 text-lg font-bold">
              ₹{course.discountedFee}{" "}
              <span className="line-through text-gray-500 text-sm">
                ₹{course.originalFee}
              </span>
            </p>
            <a
              href={course.enrollLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded-lg text-center transition duration-300"
            >
              Enroll Now
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseProvider;
