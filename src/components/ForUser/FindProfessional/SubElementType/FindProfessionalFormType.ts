import * as yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const FindProfessionalSchema = yup.object({
  name: yup
    .string()
    .min(4, "name must be at least 4 word")
    .required("name is required!"),
  email: yup
    .string()
    .email("Please provide a valid email!")
    .required("Email is required!"),
  message: yup.string().required().max(150),
  phone: yup
    .string()
    .required("required")
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "too short")
    .max(10, "too long"),
});
