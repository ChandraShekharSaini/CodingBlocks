// CourseProvider.jsx
import axios from "axios";
import { createContext, useState, useEffect } from "react";
import CCared from "./CCared";

export const CourseCard = ({ typeOfCourse }) => {

  console.log('pROVIDER',typeOfCourse);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCourseData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3400/api/v2/mentor/course/get/course/limit?type=${typeOfCourse}&limit=${3}`
        );
        setCourses(response.data.data);
      } catch (error) {
        console.error("Error fetching course data:", error);
      } finally {
        setLoading(false);
      }
    };

    getCourseData();
  }, []);


  if (loading) return <p className="text-center text-white">Loading...</p>;

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {courses.map((course, index) => (
        <CCared course={course} index={index} />
      
      ))}
    </div>
  );
};

export default CourseCard;
