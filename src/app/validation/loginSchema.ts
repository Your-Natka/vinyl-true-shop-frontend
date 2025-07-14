import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("INVALID_EMAIL").required("REQUIRED"),
  password: Yup.string()
    .min(8, "MIN")
    .max(16, "MAX")
    .matches(/[a-zA-Z]/, "LATIN_LETTERS")
    .required("REQUIRED"),
});