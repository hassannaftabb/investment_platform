import * as yup from "yup";
export  const ReviewSchema = yup.object({
 email: yup
    .string()
    .email("Please provide a valid email!")
    .required("Email is required!"),
 message:yup
    .string()
    .required()
    .max(150)
});