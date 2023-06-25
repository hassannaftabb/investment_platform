import React, { useState } from "react";
import { Link } from "react-router-dom";
import BasicInput from "../../../../sub-components/shared/Forms/BasicInput/BasicInput";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Button from "../../../../sub-components/shared/Button/Button";
import CustomCheckbox from "../../../../sub-components/shared/Checkbox/Checkbox";
import SimpleDivider from "../../../../sub-components/shared/Divider/SimpleDivider";
import { CredetialsPropTypes } from "./types";
import { toast } from "react-toastify";
import ErrorText from "../../../../sub-components/shared/ErrorText/ErrorText";
import { useFormik } from "formik";
import { credsValidationSchema } from "./schema";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { countries_list } from "../../../../../constants/countries";

const Credentials = ({ nextStep, formik }: CredetialsPropTypes) => {
  const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
  const selectedCountryTemplate = (option: any, props: any) => {
    if (option) {
      return (
        <div className="flex align-items-center">
          <div>{option.name}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };

  const countryOptionTemplate = (option: any) => {
    return (
      <div className="flex align-items-center">
        <div>{option.name}</div>
      </div>
    );
  };

  const credsFormik = useFormik({
    initialValues: {
      email: formik.values.email,
      password: formik.values.password,
      name: formik.values.name,
      confirmPassword: formik.values.confirmPassword,
      phone: formik.values.phone,
      dob: formik.values.dob,
      country: formik.values.country,
    },
    enableReinitialize: true,
    validationSchema: credsValidationSchema,
    onSubmit: async () => {
      if (!termsAccepted) {
        toast.info("Please accept our terms before proceeding!");
      } else {
      }
    },
  });

  const panelFooterTemplate = () => {
    return (
      <div className="py-2 px-3">
        {formik.values.country.name ? (
          <span>
            <b>{formik.values.country.name}</b> selected.
          </span>
        ) : (
          "No country selected."
        )}
      </div>
    );
  };

  return (
    <div className="h-[98%] py-[1%] bg-secondary-bright w-1/3 sm:w-[90%] sm:max-h-[660px] rounded-[32px] flex flex-col items-center justify-center text-black-2">
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
              label="Full name"
              type="text"
              id="name"
              name="name"
              key={"name"}
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {credsFormik.touched.name && Boolean(credsFormik.errors.name) && (
              <ErrorText text={credsFormik.errors.name} />
            )}
          </div>
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
              label="Phone Number"
              type="number"
              id="phone"
              name="phone"
              key={"phone"}
              value={formik.values.phone}
              onChange={formik.handleChange}
            />
            {credsFormik.touched.phone && Boolean(credsFormik.errors.phone) && (
              <ErrorText text={credsFormik.errors.phone} />
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
          <div>
            <BasicInput
              label="Confirm Password"
              id="confirmPassword"
              name="confirmPassword"
              key="confirmPassword"
              value={formik.values.confirmPassword}
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
            {credsFormik.touched.confirmPassword &&
              Boolean(credsFormik.errors.confirmPassword) && (
                <ErrorText text={credsFormik.errors.confirmPassword} />
              )}
          </div>
          <div>
            <Calendar
              value={formik.values.dob}
              id="dob"
              name="dob"
              onChange={formik.handleChange}
              className="w-full"
              placeholder="Date Of Birth"
            />
          </div>
          <div>
            <Dropdown
              value={formik.values.country}
              onChange={formik.handleChange}
              id="country"
              name="country"
              options={countries_list}
              optionLabel="name"
              placeholder="Country"
              valueTemplate={selectedCountryTemplate}
              itemTemplate={countryOptionTemplate}
              className="w-full"
              panelFooterTemplate={panelFooterTemplate}
            />
          </div>
        </div>
        <Button title="Register" onClick={credsFormik.handleSubmit} />

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
