import * as yup from "yup";
export  const SocialMediaSchema = yup.object({
 email: yup
    .string()
    .email("Please provide a valid email!")
    .required("Email is required!"),
 facebook:yup
    .string()
    .max(200),
 messenger:yup
    .string()
    .max(200),
 twitter:yup
    .string()
    .max(200),
 pinterest:yup
    .string()
    .max(200),
 portfolioLink:yup
    .string()
    .required("Portfolio Link is required!")
    .max(200),
});