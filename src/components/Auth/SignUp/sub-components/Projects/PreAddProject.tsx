import React from "react";
import { PreAddProjectPropTypes } from "./types";
import extension from "../../../../../assets/images/extension.png";

const PreAddProject = ({ nextStep, skipProjects }: PreAddProjectPropTypes) => {
  return (
    <div className='min-h-[95%] bg-secondary-bright w-2/3 rounded-[32px] flex flex-col items-center justify-center text-black-2 font-mulish'>
      <div className='flex flex-col justify-evenly items-center w-5/6 h-5/6 gap-6'>
        <div className='flex flex-col items-center text-center justify-center space-y-2'>
          <h3 className='font-semibold text-4xl leading-[45.18px] text-center text-secondary-dark'>
            Add your first project
          </h3>
          <p className='font-medium text-sm text-secondary-light w-2/3'>
            A project is a collection of photos of your work. Projects are one
            of the key ways homeowners can find you on Amar Designer.
          </p>
        </div>
        <div
          className='h-2/3 w-3/4 p-[5%] transition-all flex flex-col items-center justify-center space-y-2 border border-secondary-bright rounded-lg shadow-md cursor-pointer hover:shadow-md hover:shadow-primary'
          onClick={() => nextStep()}
        >
          <img src={extension} className='w-[4rem]' alt='extension' />
          <span className='font-semibold text-[22px] text-primary'>
            Create Your First Project
          </span>
        </div>
        <div>
          <span
            className='underline text-primary font-semibold cursor-pointer text-xl'
            onClick={skipProjects}
          >
            Skip Projects
          </span>
        </div>
      </div>
    </div>
  );
};

export default PreAddProject;
