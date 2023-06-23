import * as yup from "yup";
export  const ContactSchema = yup.object({
    name: yup.string().min(4).required(" Name is required!"),
  email: yup
    .string()
    .email("Please provide a valid email!")
    .required("Email is required!"),
    message: yup.string().min(5).max(200).required(" Please enter message between 5 to 200")

});
