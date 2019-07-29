import * as types from "./actionTypes";

const createCourse = course => {
  return {
    type: types.CREATE_COURSE,
    course
  };
};

export { createCourse };
