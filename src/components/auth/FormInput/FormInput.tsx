import { TextField } from "@mui/material";
import { Field } from "formik";
import style from "./FormInput.module.css";
import React from "react";

interface FormInputProps {
  label: string;
  name: string;
  type: "text" | "email" | "password";
  error?: string | boolean;
  touched?: boolean;
  helperText?: string;
}

const FormInput = ({ label, name, type, error, touched, helperText }: FormInputProps) => {
  return (
    <Field
      className={style.input}
      as={TextField}
      type={type}
      error={error && touched}
      helperText={error ? helperText : null}
      id={name}
      name={name}
      label={label}
    />
  );
};

export default FormInput;
