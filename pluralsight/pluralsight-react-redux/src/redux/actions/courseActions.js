import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";

const createCourse = course => {
  return {
    type: types.CREATE_COURSE,
    course
  };
};

const loadCourseSuccess = courses => {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
};

const loadCourses = () => {
  return dispatch => {
    return courseApi
      .getCourses()
      .then(courses => {
        dispatch(loadCourseSuccess(courses));
      })
      .catch(error => {
        throw error;
      });
  };
};

export { createCourse, loadCourses, loadCourseSuccess };
