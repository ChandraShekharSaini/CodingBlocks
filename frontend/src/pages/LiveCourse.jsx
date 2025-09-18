import React from "react";
import ClassRoomCards from "../components/ClassRoomCards";
import NavBar from "../components/NavBar";

const LiveCourse = () => {
  return (
    <div>
      <NavBar showAll={false} />
      <ClassRoomCards typeOfCourse="live" />
    </div>
  );
};

export default LiveCourse;
