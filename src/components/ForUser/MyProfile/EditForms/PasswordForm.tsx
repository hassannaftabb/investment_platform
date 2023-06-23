import React from "react";
import { PasswordSchema } from "../EditFormSchema/PasswordSchema";
import BasicInput from "../../../sub-components/shared/Forms/BasicInput/BasicInput";
import { useFormik } from "formik";
import ErrorText from "../../../sub-components/shared/ErrorText/ErrorText";
import Button from "../../../sub-components/shared/Button/Button";
import { useNavigate } from "react-router-dom";

const PasswordForm = () => {
  const navigate = useNavigate();
  const PasswordFormik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    enableReinitialize: true,
    validationSchema: PasswordSchema,
    onSubmit: (values) => {
      console.log("runned");
      navigate("/profile");
    },
  });

  return (
    <div>
      <h2 className=" text-2xl my-3 font-mulish font-bold text-center">
        Update Password
      </h2>
      <div className="flex flex-col w-[60%] sm:w-full m-auto">
        <BasicInput
          label="Enter current Pasword"
          id="currentPassword"
          name="currentPassword"
          type="password"
          required
          value={PasswordFormik.values.currentPassword}
          onChange={PasswordFormik.handleChange}
        />
        {PasswordFormik.touched.currentPassword &&
          Boolean(PasswordFormik.errors.currentPassword) && (
            <ErrorText text={PasswordFormik.errors.currentPassword} />
          )}
        <div className=" h-9" />
        <BasicInput
          label="Enter new Pasword"
          id="newPassword"
          name="newPassword"
          type="password"
          required
          value={PasswordFormik.values.newPassword}
          onChange={PasswordFormik.handleChange}
        />
        {PasswordFormik.touched.newPassword &&
          Boolean(PasswordFormik.errors.newPassword) && (
            <ErrorText text={PasswordFormik.errors.newPassword} />
          )}
        <div className=" h-9" />
        <BasicInput
          label="Confirm Pasword"
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          required
          value={PasswordFormik.values.confirmPassword}
          onChange={PasswordFormik.handleChange}
        />
        {PasswordFormik.touched.confirmPassword &&
          Boolean(PasswordFormik.errors.confirmPassword) && (
            <ErrorText text={PasswordFormik.errors.confirmPassword} />
          )}
        <div className=" h-9" />
        <Button
          title="Set Password"
          className="mt-11"
          onClick={PasswordFormik.handleSubmit}
        />
      </div>
    </div>
  );
};

export default PasswordForm;
