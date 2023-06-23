import React from "react";
import BasicInput from "../../../sub-components/shared/Forms/BasicInput/BasicInput";
import { useFormik } from "formik";
import ErrorText from "../../../sub-components/shared/ErrorText/ErrorText";
import Button from "../../../sub-components/shared/Button/Button";
import { BusinessSchema } from "../EditFormSchema/BusinessSchema";

const BusinessForm = () => {
  const BusinessFormik = useFormik({
    initialValues: {
      businessName: "",
      phoneNumber: "",
      website: "",
      address: "",
    },
    enableReinitialize: true,
    validationSchema: BusinessSchema,
    onSubmit: (values) => {
      // navigate("/profile")
    },
  });

  return (
    <div>
      <h2 className=" text-2xl my-3 font-mulish font-bold text-center">
        Update Business
      </h2>
      <div className="flex flex-col w-[60%] sm:w-full m-auto">
        <BasicInput
          label="Enter the Business Name"
          id="businessName"
          name="businessName"
          type="businessName"
          required
          value={BusinessFormik.values.businessName}
          onChange={BusinessFormik.handleChange}
        />
        {BusinessFormik.touched.businessName &&
          Boolean(BusinessFormik.errors.businessName) && (
            <ErrorText text={BusinessFormik.errors.businessName} />
          )}
        <div className=" h-9" />
        <BasicInput
          label="Enter the Phone Number"
          id="phoneNumber"
          name="phoneNumber"
          type="phoneNumber"
          required
          value={BusinessFormik.values.phoneNumber}
          onChange={BusinessFormik.handleChange}
        />
        {BusinessFormik.touched.phoneNumber &&
          Boolean(BusinessFormik.errors.phoneNumber) && (
            <ErrorText text={BusinessFormik.errors.phoneNumber} />
          )}
        <div className=" h-9" />
        <BasicInput
          label="Enter the Website"
          id="website"
          name="website"
          type="website"
          required
          value={BusinessFormik.values.website}
          onChange={BusinessFormik.handleChange}
        />
        {BusinessFormik.touched.website &&
          Boolean(BusinessFormik.errors.website) && (
            <ErrorText text={BusinessFormik.errors.website} />
          )}
        <div className=" h-9" />
        <BasicInput
          label="Enter the Address"
          id="address"
          name="address"
          type="address"
          required
          value={BusinessFormik.values.address}
          onChange={BusinessFormik.handleChange}
        />
        {BusinessFormik.touched.address &&
          Boolean(BusinessFormik.errors.address) && (
            <ErrorText text={BusinessFormik.errors.address} />
          )}
        <div className=" h-9" />
        <Button
          title="Update Details"
          className="mt-11"
          onClick={BusinessFormik.handleSubmit}
        />
      </div>
    </div>
  );
};

export default BusinessForm;
