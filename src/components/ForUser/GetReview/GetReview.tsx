import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetReviewSchema } from "./GetReviewConst";
import BasicInput from "../../sub-components/shared/Forms/BasicInput/BasicInput";
import ErrorText from "../../sub-components/shared/ErrorText/ErrorText";
import CommonLayout from "../../../layouts/Common/CommonLayout";
import Button from "../../sub-components/shared/Button/Button";

const GetReview = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const GetReviewFormik = useFormik({
    initialValues: {
      email: "",
      message: "",
    },
    enableReinitialize: true,
    validationSchema: GetReviewSchema,
    onSubmit: (values) => {
      navigate("/profile");
    },
  });
  return (
    <CommonLayout>
      <div className="w-full height-[20vh] text-secondary-dark text-4xl font-bold font-poppins my-14 text-center">
        Get Review
      </div>
      <div className="flex flex-col w-[60%] sm:w-full m-auto">
        <BasicInput
          label="Email of previous Client"
          id="email"
          name="email"
          type="email"
          required
          value={GetReviewFormik.values.email}
          onChange={GetReviewFormik.handleChange}
        />
        {GetReviewFormik.touched.email &&
          Boolean(GetReviewFormik.errors.email) && (
            <ErrorText text={GetReviewFormik.errors.email} />
          )}
        <div className=" h-9" />
        <BasicInput
          label="Message for previous Client"
          id="message"
          name="message"
          type="textarea"
          required
          multiline
          rows={4}
          value={GetReviewFormik.values.message}
          onChange={GetReviewFormik.handleChange}
        />
        {GetReviewFormik.touched.message &&
          Boolean(GetReviewFormik.errors.message) && (
            <ErrorText text={GetReviewFormik.errors.message} />
          )}
        <Button
          title="Send Request"
          className="mt-11"
          onClick={GetReviewFormik.handleSubmit}
        />
      </div>
    </CommonLayout>
  );
};

export default GetReview;
