import * as yup from "yup";
export const phoneValidationSchema = yup.object({
  phoneNumber: yup
    .string()
    .min(10, "Phone number must be at least 10 numbers.")
    .max(10, "Phone number should be only 10 numbers")
    .required("Phone number is required!"),
});
