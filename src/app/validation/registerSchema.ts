import * as Yup from "yup";
import { LoginSchema } from "./loginSchema";

export const RegisterSchema = Yup.object().shape({
  fullName: Yup.string().required("REQUIRED"),
  ...LoginSchema.fields
});