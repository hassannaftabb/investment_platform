import React from "react";
import StepsAndAuthLayout from "../../../layouts/StepsAndAuthLayout";
import Button from "../../sub-components/shared/Button/Button";
import { TbMailForward } from "react-icons/tb";

const EmailSetReset = () => {
  const handleChange = () => {};
  return (
    <StepsAndAuthLayout>
      <div className='flex space-x-2 w-[40%] items-center h-[45%] justify-center bg-secondary-bright rounded-2xl  '>
        <div className='w-[70%] min-h-300 mt-5'>
          <h5 className='font-semibold text-3xl text-center  text-secondary-dark  '>
            Email Sent!
          </h5>
          <div className=' text-[#84818A] text-xs text-center mt-3'>
            Check your inbox for an email from Amar Designer with a password
            reset link (sent to eureka22@email.com).
          </div>
          <div className='mt-5 w-[60%]  m-auto'>
            <Button
              title='Open Gmail'
              icon={<TbMailForward className='mr-3' size={20} />}
              onClick={handleChange}
            />
          </div>
        </div>
      </div>
    </StepsAndAuthLayout>
  );
};

export default EmailSetReset;
