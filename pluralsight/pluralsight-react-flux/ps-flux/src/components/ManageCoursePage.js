import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import CourseForm from "./CourseForm";
import courseStore from "../stores/courseStore";
import authorStore from "../stores/authorStore";
import * as courseActions from "../actions/courseActions";
import * as authorActions from "../actions/authorActions";

const ManageCoursePage = props => {
  const [errors, setErrors] = useState({});
  const [authors, setAuthors] = useState(authorStore.getAuthors());

  const [courses, setCourses] = useState(courseStore.getCourses());
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: ""
  });

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    const slug = props.match.params.slug;
    if (courses.length === 0) {
      courseActions.loadCourses();
    } else if (slug) {
      const _course = courseStore.getCourseBySlug(slug);
      setCourse(_course);
      if (!_course) props.history.push("/notfound");
    }

    return () => courseStore.removeChangeListener(onChange);
  }, [courses.length, props.match.params.slug, props.history]);

  useEffect(() => {
    authorStore.addChangeListener(onAuthorsChange);
    if (authors.length === 0) authorActions.loadAuthors();
    return () => authorStore.removeChangeListener(onAuthorsChange);
  }, [authors.length]);

  const onChange = () => {
    setCourses(courseStore.getCourses());
  };

  const onAuthorsChange = () => {
    setAuthors(authorStore.getAuthors());
  };

  const handleChange = ({ target }) => {
    setCourse({
      ...course,
      [target.name]: target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!formIsValid()) return;

    courseActions.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course saved.");
    });
  };

  const formIsValid = () => {
    const _errors = {};
    if (!course.title) _errors.title = "Title is required";
    if (!course.authorId) _errors.authorId = "Author ID is required";
    if (!course.category) _errors.category = "Category is required";

    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  };

  return (
    <>
      <h2>Manage Course</h2>
      {/* <Prompt when={true} message="Are you sure you want to leave?" /> */}
      <p>{props.match.params.slug}</p>
      <CourseForm
        errors={errors}
        course={course}
        authors={authors}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageCoursePage;
