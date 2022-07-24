import React from "react";
import { ErrorMessage, useField } from "formik";

const TextField = (props) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <label htmlFor={field.name}>{props.label}</label>
      <input {...field} {...props} />
      <ErrorMessage name={field.name} />
    </div>
  );
};

export default TextField;
