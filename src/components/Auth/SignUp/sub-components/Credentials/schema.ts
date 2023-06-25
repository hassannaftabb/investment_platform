import * as yup from "yup";
export const credsValidationSchema = yup.object({
  email: yup
    .string()
    .email("Please provide a valid email!")
    .required("Email is required!"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 numbers!")
    .required("Password is required!"),
  phone: yup.string().required("Phone number is required!"),
  name: yup.string().required("Name is required!"),
  dob: yup.string().required("Date of birth is required!"),
  confirmPassword: yup.string().required("Re-enter your password!"),
  country: yup.object().required("Country is required!"),
});
