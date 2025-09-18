// import React, { useState } from "react";
// import axios from "axios";
// import { TimePicker, Button } from "rsuite";
// import "rsuite/dist/rsuite.min.css";

// const CourseForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     venue: "",
//     mentorName: "",
//     startDate: "",
//     endDate: "",
//     syllabus: "",
//     timeIn: null, // RSuite TimePicker returns Date object
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleTimeChange = (value) => {
//     setFormData({ ...formData, timeIn: value });
//   };

//   console.log(formData);
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const mentorId = "68c98a0b7f0db5defb4a95cb"; // example mentor ID

//     try {
//       // Convert timeIn to HH:mm string before sending
//       const payload = {
//         ...formData,
//         timeIn: formData.timeIn
//           ? formData.timeIn.toTimeString().slice(0, 5)
//           : "",
//       };
//       const res = await axios.post(
//         `http://localhost:3400/api/v2/mentor/course/post/course/${mentorId}`,
//         payload
//       );
//       alert("Course created successfully!");
//       console.log(res.data);
//     } catch (error) {
//       console.error(error);
//       alert("Error creating course");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
//       <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
//         <h2 className="text-xl font-bold mb-4 text-center">Create Course</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Course Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           />
//           <input
//             type="text"
//             name="venue"
//             placeholder="Venue"
//             value={formData.venue}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           />
//           <input
//             type="text"
//             name="mentorName"
//             placeholder="Mentor Name"
//             value={formData.mentorName}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           />
//           <input
//             type="date"
//             name="startDate"
//             value={formData.startDate}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           />
//           <input
//             type="date"
//             name="endDate"
//             value={formData.endDate}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           />
//           <input
//             type="url"
//             name="syllabus"
//             placeholder="Syllabus URL"
//             value={formData.syllabus}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           />

//           <div>
//             <label className="block mb-1">Start Time:</label>
//             <TimePicker
//               value={formData.startTime}
//               onChange={(value) =>
//                 setFormData({ ...formData, startTime: value })
//               }
//               format="hh:mm aa"
//               showMeridiem
//               placeholder="Select start time"
//               className="w-full"
//               required
//             />
//           </div>

//           {/* End Time */}
//           <div>
//             <label className="block mb-1">End Time:</label>
//             <TimePicker
//               value={formData.endTime}
//               onChange={(value) => setFormData({ ...formData, endTime: value })}
//               format="hh:mm aa"
//               showMeridiem
//               placeholder="Select end time"
//               className="w-full"
//               required
//             />
//           </div>

//           <Button type="submit" appearance="primary" className="w-full mt-4">
//             Submit
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CourseForm;

// CourseForm.jsx
// import React, { useState } from 'react';
// import { TimePicker, DatePicker } from 'rsuite';
// import 'rsuite/dist/rsuite.min.css';
// import axios from 'axios';

// const CourseForm = ({ mentorId }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     venue: '',
//     mentorName: '',
//     startDate: null,
//     endDate: null,
//     startTimeDate: null,
//     endTimeDate: null,
//     syllabus: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Convert time to "hh:mm AM/PM" string
//     const startTime = formData.startTimeDate?.toLocaleTimeString([], {
//       hour: '2-digit',
//       minute: '2-digit',
//       hour12: true
//     });

//     const endTime = formData.endTimeDate?.toLocaleTimeString([], {
//       hour: '2-digit',
//       minute: '2-digit',
//       hour12: true
//     });

//     const payload = {
//       name: formData.name,
//       venue: formData.venue,
//       mentorName: formData.mentorName,
//       startDate: formData.startDate,
//       endDate: formData.endDate,
//       startTime,
//       endTime,
//       syllabus: formData.syllabus
//     };

//     try {
//
//       const response = await axios.post(`http://localhost:3400/api/v2/mentor/course/post/course/${mentorId}`, payload);
//       console.log('Course created successfully:', response.data);
//       alert('Course Created!');
//       // Reset form
//       setFormData({
//         name: '',
//         venue: '',
//         mentorName: '',
//         startDate: null,
//         endDate: null,
//         startTimeDate: null,
//         endTimeDate: null,
//         syllabus: '',
//       });
//     } catch (error) {
//       console.error('Error creating course:', error);
//       alert('Failed to create course');
//     }
//   };

//   return (
//     <div style={{ maxWidth: '500px', margin: 'auto' }}>
//       <h2>Create Course</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Course Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label>Venue:</label>
//           <input
//             type="text"
//             name="venue"
//             value={formData.venue}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label>Mentor Name:</label>
//           <input
//             type="text"
//             name="mentorName"
//             value={formData.mentorName}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label>Start Date:</label>
//           <DatePicker
//             oneTap
//             value={formData.startDate}
//             onChange={(date) => setFormData(prev => ({ ...prev, startDate: date }))}
//             required
//           />
//         </div>

//         <div>
//           <label>End Date:</label>
//           <DatePicker
//             oneTap
//             value={formData.endDate}
//             onChange={(date) => setFormData(prev => ({ ...prev, endDate: date }))}
//             required
//           />
//         </div>

//         <div>
//           <label>Start Time:</label>
//           <TimePicker
//             format="hh:mm a"
//             value={formData.startTimeDate}
//             onChange={(value) => setFormData(prev => ({ ...prev, startTimeDate: value }))}
//             required
//           />
//         </div>

//         <div>
//           <label>End Time:</label>
//           <TimePicker
//             format="hh:mm a"
//             value={formData.endTimeDate}
//             onChange={(value) => setFormData(prev => ({ ...prev, endTimeDate: value }))}
//             required
//           />
//         </div>

//         <div>
//           <label>Syllabus:</label>
//           <textarea
//             name="syllabus"
//             value={formData.syllabus}
//             onChange={handleChange}
//             rows="4"
//             required
//           />
//         </div>

//         <button type="submit" style={{ marginTop: '20px' }}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CourseForm;

// import React, { useState } from 'react';
// import { DatePicker, TimePicker } from 'rsuite';
// import 'rsuite/dist/rsuite.min.css';
// import axios from 'axios';

// const CourseForm = ({ mentorId }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     venue: '',
//     mentorName: '',
//     startDate: null,
//     endDate: null,
//     startTimeDate: null,
//     endTimeDate: null,
//     syllabus: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const startTime = formData.startTimeDate?.toLocaleTimeString([], {
//       hour: '2-digit',
//       minute: '2-digit',
//       hour12: true,
//     });

//     const endTime = formData.endTimeDate?.toLocaleTimeString([], {
//       hour: '2-digit',
//       minute: '2-digit',
//       hour12: true,
//     });

//     const payload = {
//       name: formData.name,
//       venue: formData.venue,
//       mentorName: formData.mentorName,
//       startDate: formData.startDate,
//       endDate: formData.endDate,
//       startTime,
//       endTime,
//       syllabus: formData.syllabus,
//     };

//      const mentorId = "68c98a0b7f0db5defb4a95cb";

//     try {
//       const response = await axios.post(`http://localhost:3400/api/v2/mentor/course/post/course/${mentorId}`, payload);
//       console.log('Course created successfully:', response.data);
//       alert('Course Created!');
//     } catch (error) {
//       console.error('Error creating course:', error);
//       alert('Failed to create course');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
//       <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
//         <h2 className="text-xl font-bold mb-4 text-center">Create Course</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">

//           {/* Course Name */}
//           <input
//             type="text"
//             name="name"
//             placeholder="Course Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           />

//           {/* Venue */}
//           <input
//             type="text"
//             name="venue"
//             placeholder="Venue"
//             value={formData.venue}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           />

//           {/* Mentor Name */}
//           <input
//             type="text"
//             name="mentorName"
//             placeholder="Mentor Name"
//             value={formData.mentorName}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           />

//           {/* Start Date */}
//           <div>
//             <label className="block mb-1">Start Date:</label>
//             <DatePicker
//               oneTap
//               className="w-full"
//               value={formData.startDate}
//               onChange={(date) => setFormData((prev) => ({ ...prev, startDate: date }))}
//               placeholder="Select start date"
//               required
//             />
//           </div>

//           {/* End Date */}
//           <div>
//             <label className="block mb-1">End Date:</label>
//             <DatePicker
//               oneTap
//               className="w-full"
//               value={formData.endDate}
//               onChange={(date) => setFormData((prev) => ({ ...prev, endDate: date }))}
//               placeholder="Select end date"
//               required
//             />
//           </div>

//           {/* Start Time */}
//           <div>
//             <label className="block mb-1">Start Time:</label>
//             <TimePicker
//               className="w-full"
//               format="hh:mm a"
//               value={formData.startTimeDate}
//               onChange={(value) => setFormData((prev) => ({ ...prev, startTimeDate: value }))}
//               placeholder="Select start time"
//               required
//             />
//           </div>

//           {/* End Time */}
//           <div>
//             <label className="block mb-1">End Time:</label>
//             <TimePicker
//               className="w-full"
//               format="hh:mm a"
//               value={formData.endTimeDate}
//               onChange={(value) => setFormData((prev) => ({ ...prev, endTimeDate: value }))}
//               placeholder="Select end time"
//               required
//             />
//           </div>

//           {/* Syllabus URL */}
//           <input
//             type="url"
//             name="syllabus"
//             placeholder="Syllabus URL"
//             value={formData.syllabus}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           />

//           <button
//             type="submit"
//             className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CourseForm;
import React, { useState } from "react";
import { DatePicker, TimePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import axios from "axios";

const CourseForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    venue: "",
    mentorName: "",
    mentorImage: "", // ✅ added
    startDate: null,
    endDate: null,
    scheduleDays: "", // ✅ added
    startTimeDate: null,
    endTimeDate: null,
    syllabus: "",
    discountedFee: "", // ✅ added
    originalFee: "", // ✅ added
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert times to hh:mm AM/PM strings
    const startTime = formData.startTimeDate?.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const endTime = formData.endTimeDate?.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const payload = {
      name: formData.name,
      venue: formData.venue,
      mentorName: formData.mentorName,
      mentorImage: formData.mentorImage,
      startDate: formData.startDate,
      endDate: formData.endDate,
      scheduleDays: formData.scheduleDays,
      startTime,
      endTime,
      syllabus: formData.syllabus,
      discountedFee: formData.discountedFee,
      originalFee: formData.originalFee,
    };

    const mentorId = "68c98a0b7f0db5defb4a95cb"; // example mentor ID

    try {
      const response = await axios.post(
        `http://localhost:3400/api/v2/mentor/course/post/course/${mentorId}`,
        payload
      );
      console.log("Course created successfully:", response.data);
      alert("Course Created!");
    } catch (error) {
      console.error("Error creating course:", error);
      alert("Failed to create course");
    }
  };

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-4 text-center">Create Course</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Course Name */}
          <div>
            <label className="block mb-1 font-medium">Course Name:</label>
            <select
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">-- Select Course --</option>
              <option value="MERN Stack">MERN Stack</option>
              <option value="Java Full Stack Development">
                Java Full Stack Development
              </option>
              <option value="Cloud Computing">Cloud Computing</option>
              <option value="Data Science">Data Science</option>
              <option value="DevOps">DevOps</option>
              <option value="AppDevelopment with Flutter">Mobile App Development with Flutter</option>
            </select>
          </div>

          {/* Venue */}
          <div>
            <label className="block mb-1 font-medium">Venue:</label>
            <select
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">-- Select Venue --</option>
              <option value="Online">Online</option>
              <option value="Classroom">Classroom</option>
            </select>
          </div>

          {/* Mentor Name */}
          <input
            type="text"
            name="mentorName"
            placeholder="Mentor Name"
            value={formData.mentorName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          {/* Mentor Image URL */}
          <input
            type="url"
            name="mentorImage"
            placeholder="Mentor Image URL"
            value={formData.mentorImage}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          {/* Schedule Days */}
          <input
            type="text"
            name="scheduleDays"
            placeholder="Schedule Days (e.g. Sat & Sun)"
            value={formData.scheduleDays}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          {/* Start Date */}
          <div>
            <label className="block mb-1">Start Date:</label>
            <DatePicker
              oneTap
              className="w-full"
              value={formData.startDate}
              onChange={(date) =>
                setFormData((prev) => ({ ...prev, startDate: date }))
              }
              placeholder="Select start date"
              required
            />
          </div>

          {/* End Date */}
          <div>
            <label className="block mb-1">End Date:</label>
            <DatePicker
              oneTap
              className="w-full"
              value={formData.endDate}
              onChange={(date) =>
                setFormData((prev) => ({ ...prev, endDate: date }))
              }
              placeholder="Select end date"
            />
          </div>

          {/* Start Time */}
          <div>
            <label className="block mb-1">Start Time:</label>
            <TimePicker
              className="w-full"
              format="hh:mm a"
              value={formData.startTimeDate}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, startTimeDate: value }))
              }
              placeholder="Select start time"
              required
            />
          </div>

          {/* End Time */}
          <div>
            <label className="block mb-1">End Time:</label>
            <TimePicker
              className="w-full"
              format="hh:mm a"
              value={formData.endTimeDate}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, endTimeDate: value }))
              }
              placeholder="Select end time"
              required
            />
          </div>

          {/* Syllabus URL */}
          <input
            type="url"
            name="syllabus"
            placeholder="Syllabus URL"
            value={formData.syllabus}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          {/* Discounted Fee */}
          <input
            type="text"
            name="discountedFee"
            placeholder="Discounted Fee"
            value={formData.discountedFee}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          {/* Original Fee */}
          <input
            type="text"
            name="originalFee"
            placeholder="Original Fee"
            value={formData.originalFee}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CourseForm;
