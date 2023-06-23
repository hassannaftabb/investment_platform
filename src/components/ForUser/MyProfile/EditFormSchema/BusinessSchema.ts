import * as yup from "yup";
export  const BusinessSchema = yup.object({
 businessName: yup
    .string()
    .required("Enter the Business Name")
    .max(100),
 phoneNumber:yup
    .number()
    .required("Enter the Phone number")
    .min(10,"Phone Number must have 10 digits")
    .max(10,"Phone Number must have 10 digits"),
    website:yup
    .string()
    .required("Enter the website")
    .max(200),
    address:yup
    .string()
    .required("Enter the Address")
    .max(200)
});