import axios from "axios";


export const mentorAuthAPI = axios.create({
  baseURL: "http://localhost:3400/api/v1/mentor/auth",
});


export const mentorCourseAPI = axios.create({
  baseURL: "http://localhost:3400/api/v2/mentor/course",
});


export const userAuthAPI = axios.create({
  baseURL: "http://localhost:3400/api/v3/user/auth",
});
