import React, { useState } from "react";
import { toast } from "react-toastify";

import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";

const ManageCoursePage = props => {
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: ""
  });

  const handleChange = ({ target }) => {
    setCourse({
      ...course,
      [target.name]: target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    courseApi.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course saved.");
    });
  };

  return (
    <>
      <h2>Manage Course</h2>
      {/* <Prompt when={true} message="Are you sure you want to leave?" /> */}
      {props.match.params.slug}
      <CourseForm
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageCoursePage;
