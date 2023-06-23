import * as yup from "yup";
export  const PasswordSchema = yup.object({
 currentPassword: yup
    .string()
    .required("Current Password is required!")
    .max(100),
 newPasswod:yup 
    .string()
    .required("Enter New Password")
    .max(100),
 confirmPassword:yup
    .string()
    .required("Enter New Password again")
    .max(100)
    .oneOf([yup.ref('newPassword'),],"Passwords must match")
});