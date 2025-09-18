import Course from "../model/course.model.js";

export const coursePost = async (req, res, next) => {
  const {
    name,
    venue,
    mentorName,
    mentorImage,
    startDate,
    endDate,
    scheduleDays,
    startTime,
    endTime,
    syllabus,
    discountedFee,
    originalFee,
  } = req.body;

  const { id } = req.params;
  console.log("Mentor Ref ID:", id);

  try {
    const newCourse = new Course({
      name,
      venue,
      mentorName,
      mentorImage,
      startDate,
      endDate,
      scheduleDays,
      startTime,
      endTime,
      syllabus,
      discountedFee,
      originalFee,
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
      response,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

export const courseUpdate = async (req, res, next) => {};

export const courseGet = async (req, res, next) => {
  try {
    const allCourse = await Course.find();

    res.status(200).json({
      status: true,
      message: "Courses fetched successfully",
      course: allCourse,
    });
  } catch (error) {
    console.error("Error fetching courses:", error);

    res.status(500).json({
      status: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const courseGetOnline = async (req, res, next) => {
  try {
    const onlineCourse = await Course.aggregate([
      {
        $match: { venue: "Live" },
      },
    ]);

    res.status(200).json({
      status: true,
      message: "Online Course Fetched   Sucessfully",
      courses: onlineCourse,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const courseGetClassroom = async (req, res, next) => {
  try {
    const classroomCourse = await Course.aggregate([
      {
        $match: { venue: "Classroom" },
      },
    ]);

    res.status(200).json({
      status: true,
      message: "Classroom Course Fetched  Sucessfully",
      courses: classroomCourse,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const getCourseWithTypeLimit = async (req,res, next) => {
  const { type, limit } = req.query;

  console.log(type , limit);

  try {

    const result = await Course.aggregate([
  { $match: type ? { venue: type } : {} },
  { $limit: parseInt(limit) || 5 }
]);


    res.status(200).json({
      status: true,
      message: "Course Fetched Successfully",
      data: result,
    });


  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
