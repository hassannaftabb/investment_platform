import * as yup from "yup";
export  const ProfileUpdateSchema = yup.object({
 email: yup
    .string()
    .email("Please provide a valid email!")
    .required("Email is required!"),
    name:yup.string().required("Name is required!").max(100),
    category:yup.string().required("Category is required!").max(100),
    address1:yup.string().required("Address is required!").max(100),
    address2:yup.string().max(100),
    city:yup.string().required("City is required!").max(100),
    country:yup.string().required("Country is required!").max(100),
    pinCode:yup.number().required("Pin Code is required!").max(100),
    phoneNumber:yup.number().required("Phone Number is required!").max(10).min(10),
    state:yup.string().required("State is required!").max(100),
    companyName:yup.string().required("Company Name is required!").max(100),
    experience:yup.number().required("Experience is required!").max(100).typeError("Experience should be a number in years!"),
});