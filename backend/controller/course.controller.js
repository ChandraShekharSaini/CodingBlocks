import Course from "../model/course.model.js";

export const coursePost = async (req, res, next) => {
  const { name, venue, mentorName, startDate, endDate, syllabus } = req.body;
  const { id } = req.params;

  console.log(id);
  try {
    const newCourse = new Course({
      name,
      venue,
      mentorName,
      startDate,
      endDate,
      syllabus,
      mentorRef: id,
    });

    await newCourse.save();

    res.status(201).json({
      status: true,
      message: "New Course Created",
      data: newCourse,
    });
  } catch (error) {
    console.error("Error creating course:", error);
    res.status(500).json({
      status: false,
      message: "Server Error. Could not create course.",
      error: error.message,
    });
  }
};

export const courseDelete = async (req, res, next) => {
  console.log("===========courserDelete================");
  const { courseId } = req.params;

  console.log(courseId);

  try {
    const response = await Course.deleteOne({ _id: courseId });

    res.status(200).json({
      status: true,
      message: "Course is Deleted Successfully",
      response ,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

export const courseUpdate = async (req, res, next) => {};

export const courseGet = async (req, res, next) => {};
