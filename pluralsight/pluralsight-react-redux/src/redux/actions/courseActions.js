const createCourse = course => {
  return {
    type: "CREATE_COURSE",
    course
  };
};

export { createCourse };
