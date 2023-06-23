import React, { useState } from "react";
import { Link } from "react-router-dom";
import BasicInput from "../../../../sub-components/shared/Forms/BasicInput/BasicInput";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import FacebookLogin from "../../../SocialMedia/Facebook/FacebookLogin";
import Button from "../../../../sub-components/shared/Button/Button";
import CustomCheckbox from "../../../../sub-components/shared/Checkbox/Checkbox";
import SimpleDivider from "../../../../sub-components/shared/Divider/SimpleDivider";
import { CredetialsPropTypes } from "./types";
import { checkUserEligibility } from "../../../../../services/Auth/CheckEligibility";
import { toast } from "react-toastify";
import ErrorText from "../../../../sub-components/shared/ErrorText/ErrorText";
import { useFormik } from "formik";
import { credsValidationSchema } from "./schema";
import processResponse from "../../../../../helpers/ProcessResponse";
import GoogleAuth from "../../../SocialMedia/Google/GoogleLogin";

const Credentials = ({ nextStep, formik }: CredetialsPropTypes) => {
  const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
  const credsFormik = useFormik({
    initialValues: {
      email: formik.values.email,
      password: formik.values.password,
    },
    enableReinitialize: true,
    validationSchema: credsValidationSchema,
    onSubmit: async () => {
      if (!termsAccepted) {
        toast.info("Please accept our terms before proceeding!");
      } else {
        const isEligibile: any = await checkUserEligibility(
          formik.values.email
        );
        processResponse(isEligibile, "Welcome on board!", () => nextStep());
      }
    },
  });

  return (
    <div className="h-[92%] py-[1%] bg-secondary-bright w-1/3 sm:w-[90%] sm:max-h-[660px] rounded-[32px] flex flex-col items-center justify-center text-black-2">
      <div className="flex flex-col justify-evenly items-start w-3/4 h-full">
        <h3 className="font-semibold text-3xl text-start">Sign Up</h3>
        <span className="text-xs font-semibold">
          <p> Already have an account?</p>{" "}
          <Link to={"/"} className="text-primary">
            Sign In
          </Link>
        </span>
        <div className="flex flex-col space-y-5 w-full">
          <div>
            <BasicInput
              label="Email Address"
              type="email"
              id="email"
              name="email"
              key={"email"}
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {credsFormik.touched.email && Boolean(credsFormik.errors.email) && (
              <ErrorText text={credsFormik.errors.email} />
            )}
          </div>
          <div>
            <BasicInput
              label="Password"
              id="password"
              name="password"
              key={"password"}
              value={formik.values.password}
              onChange={formik.handleChange}
              type={passwordVisibility ? "text" : "password"}
              inputProps={{
                endAdornment: passwordVisibility ? (
                  <AiFillEye
                    className="text-secondary-light cursor-pointer"
                    onClick={() => setPasswordVisibility(!passwordVisibility)}
                  />
                ) : (
                  <AiFillEyeInvisible
                    className="text-secondary-light cursor-pointer"
                    onClick={() => setPasswordVisibility(!passwordVisibility)}
                  />
                ),
              }}
            />
            {credsFormik.touched.password &&
              Boolean(credsFormik.errors.password) && (
                <ErrorText text={credsFormik.errors.password} />
              )}
          </div>
        </div>

        <div className="w-full text-center text-secondary-light text-sm">
          or Sign up with
        </div>

        <div className="flex sm:flex-col gap-3 justify-between items-center w-full">
          <GoogleAuth />
          <FacebookLogin />
        </div>

        <Button title="Sign Up" onClick={credsFormik.handleSubmit} />

        <CustomCheckbox
          label="By clicking Create account, I agree that I have read and accepted the Terms of Use and Privacy Policy."
          onChange={() => setTermsAccepted(!termsAccepted)}
        />

        <SimpleDivider />

        <div className="text-xs text-secondary-light font-normal leading-[17px]">
          Protected by reCAPTCHA and subject to{" "}
          <Link to={"/"} className="text-primary">
            our
          </Link>{" "}
          <Link to={"/"} className="text-primary">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link to={"/"} className="text-primary">
            Terms of Service.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Credentials;
