import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BasicInput from "../../../sub-components/shared/Forms/BasicInput/BasicInput";
import { SocialMediaSchema } from "../EditFormSchema/SocialMediaSchema";
import ErrorText from "../../../sub-components/shared/ErrorText/ErrorText";
import Button from "../../../sub-components/shared/Button/Button";

const SocialMediaForm = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const SocialMediaFormik = useFormik({
    initialValues: {
      email: "",
      facebook: "",
      messenger: "",
      twitter: "",
      pinterest: "",
      portfolioLink: "",
    },
    enableReinitialize: true,
    validationSchema: SocialMediaSchema,
    onSubmit: (values) => {
      navigate("/profile");
    },
  });
  return (
    <div>
      <h2 className=" text-xl my-3 font-mulish font-bold text-center">
        Update Social Media Links
      </h2>
      <div className="flex flex-col w-[60%] sm:w-full m-auto">
        <BasicInput
          label="Email"
          id="email"
          name="email"
          type="email"
          required
          value={SocialMediaFormik.values.email}
          onChange={SocialMediaFormik.handleChange}
        />
        {SocialMediaFormik.touched.email &&
          Boolean(SocialMediaFormik.errors.email) && (
            <ErrorText text={SocialMediaFormik.errors.email} />
          )}
        <div className=" h-9" />
        <BasicInput
          label="Twitter Profile"
          id="twitter"
          name="twitter"
          type="twitter"
          value={SocialMediaFormik.values.twitter}
          onChange={SocialMediaFormik.handleChange}
        />
        {SocialMediaFormik.touched.twitter &&
          Boolean(SocialMediaFormik.errors.twitter) && (
            <ErrorText text={SocialMediaFormik.errors.twitter} />
          )}
        <div className=" h-9" />
        <BasicInput
          label="Facebook Profile"
          id="facebook"
          name="facebook"
          type="facebook"
          value={SocialMediaFormik.values.facebook}
          onChange={SocialMediaFormik.handleChange}
        />
        {SocialMediaFormik.touched.facebook &&
          Boolean(SocialMediaFormik.errors.facebook) && (
            <ErrorText text={SocialMediaFormik.errors.facebook} />
          )}
        <div className=" h-9" />
        <BasicInput
          label="Messenger Profile"
          id="messenger"
          name="messenger"
          type="messenger"
          value={SocialMediaFormik.values.messenger}
          onChange={SocialMediaFormik.handleChange}
        />
        {SocialMediaFormik.touched.messenger &&
          Boolean(SocialMediaFormik.errors.messenger) && (
            <ErrorText text={SocialMediaFormik.errors.messenger} />
          )}
        <div className=" h-9" />
        <BasicInput
          label="Pinterest Profile"
          id="pinterest"
          name="pinterest"
          type="pinterest"
          value={SocialMediaFormik.values.pinterest}
          onChange={SocialMediaFormik.handleChange}
        />
        {SocialMediaFormik.touched.pinterest &&
          Boolean(SocialMediaFormik.errors.pinterest) && (
            <ErrorText text={SocialMediaFormik.errors.pinterest} />
          )}
        <div className=" h-9" />
        <BasicInput
          label="Portfolio Link"
          id="portfolioLink"
          name="portfolioLink"
          type="portfolioLink"
          required
          value={SocialMediaFormik.values.portfolioLink}
          onChange={SocialMediaFormik.handleChange}
        />
        {SocialMediaFormik.touched.portfolioLink &&
          Boolean(SocialMediaFormik.errors.portfolioLink) && (
            <ErrorText text={SocialMediaFormik.errors.portfolioLink} />
          )}
        <div className=" h-9" />
        <Button
          title="Save"
          className="mt-11"
          onClick={SocialMediaFormik.handleSubmit}
        />
      </div>
    </div>
  );
};

export default SocialMediaForm;
