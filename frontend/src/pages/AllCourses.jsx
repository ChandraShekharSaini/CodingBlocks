import React from "react";
import CourseCard from "../components/CourseCard";
import NavBar from "../components/NavBar";
import App from "../components/App";

import ClassRoomCard from "../components/ClassRoomCards";

const AllCourses = () => {
  return (
    <>
      <NavBar showAll={false} />
      <div className="w-full fle">
        <ClassRoomCard typeOfCourse="Live" />
      </div>

      <div>
        <ClassRoomCard typeOfCourse="Classroom" />
      </div>
    </>
  );
};

export default AllCourses;
