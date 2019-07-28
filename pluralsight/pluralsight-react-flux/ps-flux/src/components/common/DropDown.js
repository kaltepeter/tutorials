import React from "react";
import PropTypes from "prop-types";

const DropDown = props => {
  let wrapperClass = "form-group";
  if (props.error.length > 0) {
    wrapperClass += " has-error";
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <select
          id={props.id}
          name={props.name}
          onChange={props.onChange}
          value={props.value.toString()}
          className="form-control"
        >
          <option value="" />
          {props.valueOptions.map(opt => {
            return (
              <option key={opt.id} value={opt.id}>
                {opt.name}
              </option>
            );
          })}
        </select>
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
};

DropDown.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
  valueOptions: PropTypes.array.isRequired
};

DropDown.defaultProps = {
  error: ""
};

export default DropDown;
