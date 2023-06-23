import React from "react";
import Button from "../../sub-components/shared/Button/Button";
import { useFormik } from "formik";
import { ContactSchema } from "./Schema";
import ErrorText from "../../sub-components/shared/ErrorText/ErrorText";

const Contact = () => {
  const ContactFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    enableReinitialize: true,
    validationSchema: ContactSchema,
    onSubmit: (values) => {},
  });

  return (
    <div className='px-[4.23rem] pt-[2rem] flex justify-between sm:flex-col sm:p-[2rem] sm:w-[50rem] '>
      <div className='w-[45%] h-[60%] flex flex-col font-medium text-[#00000066]'>
        <h1 className='text-3xl text-[#000000]'>Contact Us</h1>
        <div className='flex flex-col justify-around mt-6'>
          <label>Name</label>
          <input
            type='text'
            className='mt-3 h-10 border-solid border border-[#DCDBDD] rounded focus:outline-none p-4 text-[#000]'
            name='name'
            value={ContactFormik.values.name}
            onChange={ContactFormik.handleChange}
          />
          {ContactFormik.touched.name && Boolean(ContactFormik.errors.name) && (
            <ErrorText text={ContactFormik.errors.name} />
          )}
        </div>
        <div className='flex flex-col mt-3'>
          <label>Email Id</label>
          <input
            type='text'
            className='mt-3 h-10 border-solid border border-[#DCDBDD] rounded focus:outline-none p-4 text-[#000]'
            name='email'
            value={ContactFormik.values.email}
            onChange={ContactFormik.handleChange}
          />
          {ContactFormik.touched.email &&
            Boolean(ContactFormik.errors.email) && (
              <ErrorText text={ContactFormik.errors.email} />
            )}
        </div>
        <div className='flex flex-col mt-3'>
          <label className='font-medium'>Message</label>
          <textarea
            className='mt-3 h-[25vh] border-solid border border-[#DCDBDD] rounded focus:outline-none p-4 text-[#000]'
            name='message'
            value={ContactFormik.values.message}
            onChange={ContactFormik.handleChange}
          ></textarea>
          {ContactFormik.touched.message &&
            Boolean(ContactFormik.errors.message) && (
              <ErrorText text={ContactFormik.errors.message} />
            )}
        </div>
        <div className='mt-5 w-[23%] '>
          <Button title='Send' onClick={ContactFormik.handleSubmit}></Button>
        </div>
      </div>
      <div className='w-[50%] sm:w-[42%] sm:mt-6 '>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.114827184245!2d77.
                        20653218198595!3d28.628901718705755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!
                        4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20
                        New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1678824399784!5m2!1sen!2sin'
          style={{ border: "0px", width: "100%", height: "100%" }}
          loading='lazy'
          title='map'
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
