import React from "react";
import { Link } from "react-router-dom";

const CCared = ({ course, index }) => {
  console.log(index);

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
      "Free Access to Online Course",
    ],
  };

  return (
    <div
      key={index}
      className="bg-gray-900 text-white rounded-xl shadow-md w-full max-w-sm mx-auto border-[2px]"
    >
      {/* Top Info */}
      <div className="flex justify-between items-center px-3 py-2 text-xs text-gray-300">
        <span className="bg-yellow-600 text-white px-2 py-0.5 rounded-full text-xs">
          {course.venue}
        </span>
        <span>Starts {new Date(course.startDate).toLocaleDateString()}</span>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-500 px-3 py-2 rounded-t-xl">
        <h2 className="text-lg font-semibold">{course.name}</h2>
      </div>

      {/* Mentor Info */}
      <div className="flex items-center gap-3 px-3 py-2">
        <img
          src={course.mentorImage}
          alt={course.mentorName}
          className="w-12 h-12 rounded-full border border-gray-600"
        />
        <div>
          <p className="text-sm font-medium">{course.mentorName}</p>
          <p className="text-xs text-gray-400">{course.organization}</p>
        </div>
      </div>

      {/* Schedule */}
      <div className="px-3 py-2 text-xs bg-gray-800">
        Schedule: {course.scheduleDays} ({course.startTime} - {course.endTime})
      </div>

      {/* Course Features */}
      <div className="grid grid-cols-2 gap-2 px-3 py-3 text-xs text-gray-300">
        {courseData.features?.map((feature, i) => (
          <div key={i} className="flex items-start gap-1">
            <span className="text-green-400">✔</span>
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {/* Price + Enroll Button */}
      <div className="px-3 py-3 border-t border-gray-700 flex flex-col gap-2">
        <p className="text-pink-400 text-base font-bold">
          ₹{course.discountedFee}{" "}
          <span className="line-through text-gray-500 text-xs">
            ₹{course.originalFee}
          </span>
        </p>
        <Link
          href={course.enrollLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-1.5 rounded-lg text-center cursor-pointer  hover:no-underline text-sm transition duration-300"
        >
          Enroll Now
        </Link>
      </div>
    </div>
  );
};

export default CCared;
