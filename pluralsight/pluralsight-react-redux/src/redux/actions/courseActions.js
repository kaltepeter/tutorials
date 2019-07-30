import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";
import { beginApiCall } from "./apiStatusActions";

const loadCourseSuccess = courses => {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
};

const updateCourseSuccess = course => {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
};

const createCourseSuccess = course => {
  return { type: types.CREATE_COURSE_SUCCESS, course };
};

const loadCourses = () => {
  return dispatch => {
    dispatch(beginApiCall());
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

const saveCourse = course => {
  // eslint-disable-next-line no-unused-vars
  return (dispatch, getState) => {
    dispatch(beginApiCall());
    return courseApi
      .saveCourse(course)
      .then(savedCourse => {
        course.id
          ? dispatch(updateCourseSuccess(saveCourse))
          : dispatch(createCourseSuccess(savedCourse));
      })
      .catch(error => {
        throw error;
      });
  };
};

export {
  loadCourses,
  loadCourseSuccess,
  saveCourse,
  updateCourseSuccess,
  createCourseSuccess
};
