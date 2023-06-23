import * as yup from "yup";
export  const ForgetPasswordValidationSchema = yup.object({
  email: yup
    .string()
    .email("Please provide a valid email!")
    .required("Email is required!"),
});
