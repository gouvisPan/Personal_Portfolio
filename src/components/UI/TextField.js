import React from "react";
import { ErrorMessage, useField } from "formik";
import "./TextField.css";

const TextField = (props) => {
  const [field, meta] = useField(props);

  return (
    <div className="text-field-content">
      <label htmlFor={field.name}>{props.label}</label>
      {props.ismessage ? (
        <textarea
          rows="5"
          cols="35"
          {...field}
          {...props}
          placeholder={props.pholder}
        ></textarea>
      ) : (
        <input {...field} {...props} placeholder={props.pHolder} />
      )}
      <ErrorMessage component="div" name={field.name} className="error-m" />
    </div>
  );
};

export default TextField;
