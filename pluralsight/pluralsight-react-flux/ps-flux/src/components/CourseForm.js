import React from "react";
import PropTypes from "prop-types";

import TextInput from "./common/TextInput";
import DropDown from "./common/DropDown";

const CourseForm = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="title"
        label="Title"
        onChange={props.onChange}
        name="title"
        value={props.course.title}
        error={props.errors.title}
      />

      <DropDown
        id="authorId"
        label="Author"
        name="authorId"
        onChange={props.onChange}
        value={props.course.authorId ? props.course.authorId.toString() : ""}
        error={props.errors.authorId}
        valueOptions={props.authors}
      />

      <TextInput
        id="category"
        label="Category"
        name="category"
        onChange={props.onChange}
        value={props.course.category}
        error={props.errors.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired
};

export default CourseForm;
