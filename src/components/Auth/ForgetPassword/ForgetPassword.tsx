import React from 'react';
import StepsAndAuthLayout from '../../../layouts/StepsAndAuthLayout';
import ErrorText from "../../sub-components/shared/ErrorText/ErrorText";
import BasicInput from '../../sub-components/shared/Forms/BasicInput/BasicInput';
import Button from '../../sub-components/shared/Button/Button';
import { ForgetPasswordValidationSchema } from "./schema"
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';


const ForgetPassword = () => {
  const navigate=useNavigate()
  const ForgetFormik = useFormik({
    initialValues: {
      email: "",
    },
    enableReinitialize: true,
    validationSchema: ForgetPasswordValidationSchema,
    onSubmit: (values) => {
           navigate("/emailreset") 
    },
  });
  return (
    <StepsAndAuthLayout>
      <div className='flex space-x-2 w-[35%] items-center h-[40%] justify-center bg-secondary-bright rounded-2xl p-7 '>
        <div className='flex flex-col justify-start items-start w-3/4  mt-6  ' >
          <h5 className='font-semibold text-xl text-start  text-secondary-dark '>Forgot Your Password?</h5>
          <div className='mt-1.5 w-[100%]'>
            <BasicInput
              label='Email Address'
              type='email'
              id='email'
              name='email'
              key={"email"}
              value={ ForgetFormik.values.email}
              onChange={ ForgetFormik.handleChange}
            />
            { ForgetFormik.touched.email &&
              Boolean( ForgetFormik.errors.email) && (
                <ErrorText text={ ForgetFormik.errors.email} />
              )}
          </div>
          <div className='flex justify-between  w-[100%] items-center mt-7'>
            <p className='text-[#FF0000] text-xs '> Back to Log In</p>
            <div className='w-[153px] h-[48px]'>
              <Button title='Continue' onClick={ ForgetFormik.handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </StepsAndAuthLayout>
  );
}

export default ForgetPassword;
