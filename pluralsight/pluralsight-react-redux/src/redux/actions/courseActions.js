import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

const loadCourseSuccess = courses => {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
};

const updateCourseSuccess = course => {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
};

const createCourseSuccess = course => {
  return { type: types.CREATE_COURSE_SUCCESS, course };
};

const deleteCourseOptimistic = course => {
  return { type: types.DELETE_COURSE_OPTIMISTIC, course };
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
        dispatch(apiCallError(error));
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
        dispatch(apiCallError(error));
        throw error;
      });
  };
};

const deleteCourse = course => {
  return dispatch => {
    dispatch(deleteCourseOptimistic(course));
    return courseApi.deleteCourse(course.id);
  };
};

export {
  loadCourses,
  loadCourseSuccess,
  saveCourse,
  updateCourseSuccess,
  createCourseSuccess,
  deleteCourse,
  deleteCourseOptimistic
};
