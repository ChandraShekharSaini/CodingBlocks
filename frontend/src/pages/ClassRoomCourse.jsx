import React from "react";
import ClassRoomCard from "../components/ClassRoomCards";

import Navbar from "../components/NavBar";

const ClassRoomCourse = () => {
  return (
    <>
      <Navbar showAll={false} />
      <div className="bg-[#08090c] h-screen">
        <ClassRoomCard typeOfCourse="classroom" />
      </div>
    </>
  );
};

export default ClassRoomCourse;
