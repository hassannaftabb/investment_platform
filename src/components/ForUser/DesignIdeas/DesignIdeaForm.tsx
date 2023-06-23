import React from "react";
import bgImage from "../../../assets/images/postPageDummy_form_bg.png";
import Button from "../../sub-components/shared/Button/Button";
import * as yup from "yup";
import { useFormik } from "formik";
import ErrorText from "../../sub-components/shared/ErrorText/ErrorText";

//schema form
export const DesignIdeaSchema = yup.object({
  name: yup.string().min(4).required("*Name is required!"),
  email: yup
    .string()
    .email("*Please provide a valid email!")
    .required("*Email is required!"),
  message: yup
    .string()
    .min(5)
    .max(200)
    .required("*Please enter message between 5 to 200"),
});

const DesignIdeasForm = () => {
  const DesignIdeaFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    enableReinitialize: true,
    validationSchema: DesignIdeaSchema,
    onSubmit: (values) => {},
  });
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          border: "1px solid red",
          borderRadius: '8px',
          height: "550px",
          marginBottom: "3rem",
        }}
        className="flex
        justify-center items-center bg-cover "
      >
        <div className=" flex flex-col justify-evenly p-7 sm:p-2 w-[55%] sm:w-[90%] h-[400px] bg-[#ed064180] rounded-lg">
          <div>
            <h1 className="text-3xl text-center font-medium text-secondary-bright">
              Contact Us
            </h1>
          </div>
          <div className="flex flex-col justify-around w-2/3 m-auto text-sm text-secondary-bright">
            <label>Name</label>
            <input
              type="text"
              className="mt-1 outline-none h-10 rounded border-[#DCDBDD] text-[#000]"
              name="name"
              value={DesignIdeaFormik.values.name}
              onChange={DesignIdeaFormik.handleChange}
            ></input>
            {DesignIdeaFormik.touched.name &&
              Boolean(DesignIdeaFormik.errors.name) && (
                <ErrorText
                  className=" text-secondary-bright"
                  text={DesignIdeaFormik.errors.name}
                />
              )}
          </div>
          <div className="flex flex-col justify-around w-2/3 m-auto text-sm text-secondary-bright">
            <label>Email Id</label>
            <input
              type="text"
              className="mt-1 outline-none h-10 rounded"
              name="email"
              value={DesignIdeaFormik.values.email}
              onChange={DesignIdeaFormik.handleChange}
            />
            {DesignIdeaFormik.touched.email &&
              Boolean(DesignIdeaFormik.errors.email) && (
                <ErrorText
                  className=" text-secondary-bright"
                  text={DesignIdeaFormik.errors.email}
                />
              )}
          </div>
          <div className="flex flex-col justify-around w-2/3 m-auto text-sm text-secondary-bright">
            <label>Message</label>
            <input
              type="text"
              className="mt-1 outline-none h-10 rounded"
              name="message"
              value={DesignIdeaFormik.values.message}
              onChange={DesignIdeaFormik.handleChange}
            ></input>
            {DesignIdeaFormik.touched.message &&
              Boolean(DesignIdeaFormik.errors.message) && (
                <ErrorText
                  className=" text-secondary-bright"
                  text={DesignIdeaFormik.errors.message}
                />
              )}
          </div>
          <Button
            title="Get Free Quote"
            className="mt-5 !w-2/3 m-auto"
            onClick={DesignIdeaFormik.handleSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default DesignIdeasForm;
