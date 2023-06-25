import React, { useState } from "react";
import StepsAndAuthLayout from "../../../layouts/StepsAndAuthLayout";
import Credentials from "./sub-components/Credentials/Credentials";
import { useFormik } from "formik";
import * as yup from "yup";

type Props = {
  setIsLoading: any;
};

const SignUp = ({ setIsLoading }: Props) => {
  const [step, setStep] = useState<number>(0);
  const createUserFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      phone: "",
      dob: "",
      country: {},
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Please provide a valid email!")
        .required("Email is required!"),
      password: yup
        .string()
        .min(6, "Password must be at least 6 numbers!")
        .required("Password is required!"),
      phone: yup.string().required("Phone number is required!"),
      name: yup.string().required("Name is required!"),
      dob: yup.string().required("Date of birth is required!"),
      confirmPassword: yup.string().required("Re-enter your password!"),
      country: yup.object().required("Country is required!"),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
    },
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  return (
    <>
      {(() => {
        switch (step) {
          case 0:
            return (
              <StepsAndAuthLayout>
                <Credentials nextStep={nextStep} formik={createUserFormik} />
              </StepsAndAuthLayout>
            );

          default:
            break;
        }
      })()}
    </>
  );
};

export default SignUp;
