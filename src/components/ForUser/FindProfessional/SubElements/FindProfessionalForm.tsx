import React from "react";
import BasicInput from "../../../sub-components/shared/Forms/BasicInput/BasicInput";
import { FindProfessionalSchema } from "../SubElementType/FindProfessionalFormType";
import { useFormik } from "formik";
import Button from "../../../sub-components/shared/Button/Button";
import ErrorText from "../../../sub-components/shared/ErrorText/ErrorText";
import { RxCross2 } from "react-icons/rx";
import { getQuoteApi } from "../../../../services/Professionals/GetQuote";
import processResponse from "../../../../helpers/ProcessResponse";

interface FindProfessionalFormProp {
  handleClose: () => void;
  professionalId: number | null;
}

const FindProfessionalForm = ({
  handleClose,
  professionalId,
}: FindProfessionalFormProp) => {
  const FindProfessionalFormFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
      phone: "",
    },
    validationSchema: FindProfessionalSchema,
    onSubmit: async (values) => {
      const response = await getQuoteApi({ ...values, professionalId });
      processResponse(
        response,
        "Qoute Sent!",
        () => (window as Window).location.reload(),
        undefined
      );
    },
  });

  return (
    <section
      className={`flex justify-center items-center w-[35%] sm:w-[80%] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30`}
    >
      <div className="flex space-x-2 w-[100%] items-center h-[40%] justify-center bg-secondary-bright rounded-2xl p-7 ">
        <div className="flex flex-col justify-start items-start w-3/4  mt-6 relative ">
          <RxCross2
            className="absolute top-[-6%] right-[-5%]  cursor-pointer"
            size={20}
            onClick={() => handleClose()}
          />
          <h5 className="font-bold text-xl   text-secondary-dark ">
            Send Message
          </h5>
          <div className="mt-1.5 w-[100%]">
            <BasicInput
              label="Name"
              type="text"
              id="name"
              name="name"
              key={"name"}
              value={FindProfessionalFormFormik.values.name}
              onChange={FindProfessionalFormFormik.handleChange}
            />
            {FindProfessionalFormFormik.touched.name &&
              Boolean(FindProfessionalFormFormik.errors.name) && (
                <ErrorText text={FindProfessionalFormFormik.errors.name} />
              )}
          </div>
          <div className="mt-1.5 w-[100%]">
            <BasicInput
              label="Email Address"
              type="email"
              id="email"
              name="email"
              key={"email"}
              value={FindProfessionalFormFormik.values.email}
              onChange={FindProfessionalFormFormik.handleChange}
            />
            {FindProfessionalFormFormik.touched.email &&
              Boolean(FindProfessionalFormFormik.errors.email) && (
                <ErrorText text={FindProfessionalFormFormik.errors.email} />
              )}
          </div>
          <div className="mt-1.5 w-[100%]">
            <BasicInput
              label="Phone Number"
              type="tel"
              id="phone"
              name="phone"
              key={"phone"}
              value={FindProfessionalFormFormik.values.phone}
              onChange={FindProfessionalFormFormik.handleChange}
            />
            {FindProfessionalFormFormik.touched.phone &&
              Boolean(FindProfessionalFormFormik.errors.phone) && (
                <ErrorText text={FindProfessionalFormFormik.errors.phone} />
              )}
          </div>
          <div className="mt-1.5 w-[100%]">
            <BasicInput
              label="Message"
              type="Text"
              id="message"
              multiline
              rows={4}
              name="message"
              key={"message"}
              value={FindProfessionalFormFormik.values.message}
              onChange={FindProfessionalFormFormik.handleChange}
            />
            {FindProfessionalFormFormik.touched.message &&
              Boolean(FindProfessionalFormFormik.errors.message) && (
                <ErrorText text={FindProfessionalFormFormik.errors.message} />
              )}
          </div>
          <div className="flex justify-center w-[100%] items-center mt-7">
            <div className="w-[153px] h-[40px]  ">
              <Button
                title="Quote"
                onClick={FindProfessionalFormFormik.handleSubmit}
                className="w-[100%] h-[100%] "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindProfessionalForm;
