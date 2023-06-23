import * as yup from "yup";
export const signInValidationSchema = yup.object({
  email: yup
    .string()
    .email("Please provide a valid email!")
    .required("Email is required!"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 numbers!")
    .required("Password is required!"),
});
