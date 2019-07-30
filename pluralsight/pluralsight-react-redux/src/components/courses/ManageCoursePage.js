import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadCourses, saveCourse } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import CourseForm from "./CourseForm";
import newCourse from "../../../tools/mockData";

const ManageCoursePage = ({
  courses,
  authors,
  loadAuthors,
  loadCourses,
  saveCourse,
  ...props
}) => {
  const [course, setCourse] = useState({ ...props.course });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch(error => {
        alert(`Loading courses failed ${error}`);
      });
    }

    if (authors.length === 0) {
      loadAuthors().catch(error => {
        alert(`Loading authors failed ${error}`);
      });
    }
  }, []);

  const handleChange = event => {
    const { name, value } = event.target;
    setCourse(prevCourse => ({
      ...prevCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value
    }));
  };

  const handleSave = event => {
    event.preventDefault();
    saveCourse(course);
  };

  return (
    <CourseForm
      course={course}
      errors={errors}
      authors={authors}
      onChange={handleChange}
      onSave={handleSave}
    />
  );
};

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  saveCourse: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    course: newCourse,
    courses: state.courses,
    authors: state.authors
  };
};

const mapDispatchToProps = {
  loadCourses,
  saveCourse,
  loadAuthors
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCoursePage);
