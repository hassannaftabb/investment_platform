import * as yup from "yup";
export const basicInfoValidationSchema = yup.object({
  companyName: yup.string().min(4).required("Company Name is required!"),
  category: yup.string().required("Category is required!"),
  address1: yup.string().required("Address is required!"),
  city: yup.string().required("City is required!"),
  isStreetAddressPrivate: yup
    .boolean()
    .required("isStreetAddressPrivate is required!"),
  country: yup.string().required("Country is required!"),
  pinCode: yup.string().required("Pin Code is required!"),
  phoneNumber: yup
    .string()
    .min(10, "Phone number should be minimum 10 numbers.")
    .max(10, "Phone number should be maximum 10 numbers")
    .required("Phone Number is required!"),
});
