// CourseProvider.jsx
import axios from "axios";
import { createContext, useState, useEffect } from "react";
import CCared from "./CCared";

export const ClassRoomCard = ({ typeOfCourse }) => {

  console.log(typeOfCourse);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCourseData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3400/api/v2/mentor/course/get/course/${typeOfCourse}`
        );

        console.log(response.data);
        setCourses(response.data.courses);
      } catch (error) {
        console.error("Error fetching course data:", error);
      } finally {
        setLoading(false);
      }
    };

    getCourseData();
  }, []);



  if (loading) return <p className="text-center text-white border-[7px] border-red-700">Loading...</p>;

  return (
    <div className="flex flex-wrap gap-2  ">
      {courses.map((course, index) => (
       <CCared course = {course} index = {index}/>
      ))}
    </div>
  );
};

export default ClassRoomCard;
