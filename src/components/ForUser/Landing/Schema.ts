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
    phoneno: yup
    .number()
    .min(10, "Phone Number must be at least 10 numbers!")
    .max(10,"Phone Number must be at most 10 numbers!")
    .required("Password is required!"),
    propertyName:yup
    .string()
    .min(6)
    .required("Property Name is required!")
});