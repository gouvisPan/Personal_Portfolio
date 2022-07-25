import React from "react";
import { ErrorMessage, useField } from "formik";
import "./TextField.css"

const TextField = (props) => {
  const [field, meta] = useField(props);

  const inputCss = props.message ? "message" : ""
  return (
    <div className="text-field-content"> 
    <div className="field">
      <label htmlFor={field.name}>{props.label}</label>
      <input {...field} {...props} className={inputCss}/>
    </div>
    <ErrorMessage component="div" name={field.name} className="error"/>
    </div>
  );
};

export default TextField;
