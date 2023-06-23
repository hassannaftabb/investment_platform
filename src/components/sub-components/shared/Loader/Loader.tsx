import React from "react";

const Loader = () => {
  return (
    <div className='bg-gray-200 w-full min-h-screen z-50 opacity-60 flex justify-center items-center fixed top-0 right-0 overflow-hidden'>
      <div className='flex min-h-screen w-full items-center justify-center bg-gray-200'>
        <div className='flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-secondary-extralight animate-spin'>
          <div className='h-9 w-9 rounded-full bg-gray-200'></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
