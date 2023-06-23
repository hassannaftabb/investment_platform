import React from 'react'
import InputWithLabel from '../../../sub-components/shared/Forms/InputWithLabel/InputWithLabel';
import imagePlaceholder from "../../../../assets/images/img_placeholder.png";
import Button from '../../../sub-components/shared/Button/Button';
import ErrorText from '../../../sub-components/shared/ErrorText/ErrorText';

// const CreateProject = ({ formik, backToDock }: any) => {

const EditProject = ({formik, backToDock}:any) => {
    let categories: any = [
        { id: "Residential", label: "Residential" },
        { id: "Commercial", label: "Commercial" },
        { id: "Hospitality", label: "Hospitality" },
        { id: "Trunkey", label: "Trunkey" },
        { id: "Other", label: "Other" },
      ];
  
  
      const setProjectImages = (e: any) => {
          let imagesArray: any = [];
          let index:any = 0;
          Object.values(e.target.files).forEach((val:any) => {
            imagesArray.push(val);
      
            const reader = new FileReader();
            reader.readAsDataURL(val);
            reader.addEventListener('load', () => {
              const csv: string = reader.result as string;
              if(reader.result){
                localStorage.setItem(`thumbnail${index}`, csv);
                index++;
                localStorage.setItem(`index`, index)
              }
            });
            
          });
          formik.setFieldValue("projectImages", imagesArray);
        };
  return (
    <div className='flex flex-col font-mulish space-y-3 my-8'>
      <div className='flex flex-col space-y-2'>
        <div className='flex justify-between w-full items-center'>
          <h3 className='font-semibold text-[41px] leading-[51.6px] text-secondary-dark'>
            Tell us about your project
          </h3>
        </div>
        <p className='font-semibold text-base text-secondary-extralight w-3/5'>
          A Project is a collection of photos and videos of your own work or
          products. Projects are usually best organized by client, job site, or
          product line.
        </p>
      </div>
      <div className='grid grid-cols-2 gap-x-4'>
        <div>
          <section className='flex flex-col space-y-4 bg-secondary-bright px-11 py-8 my-2 rounded-lg shadow-xl'>
            <div>
              <InputWithLabel
                id='projectName'
                name='projectName'
                label='New Project Name*'
                placeholder='Type a project name'
                value={formik.values.projectName}
                onChange={formik.handleChange}
              />
              {formik.touched.projectName &&
                Boolean(formik.errors.projectName) && (
                  <ErrorText text={formik.errors.projectName} />
                )}
            </div>
            <div>
              <InputWithLabel
                id='projectAddress'
                name='projectAddress'
                label='Project Address*'
                value={formik.values.projectAddress}
                placeholder='Enter a Project Locality/A, City or PIN Code (will not be shared publicly)'
                onChange={formik.handleChange}
              />
              {formik.touched.projectAddress &&
                Boolean(formik.errors.projectAddress) && (
                  <ErrorText text={formik.errors.projectAddress} />
                )}
            </div>
            <div className='grid grid-cols-2 gap-x-4'>
              <div>
                <InputWithLabel
                  id='projectYear'
                  name='projectYear'
                  label='Project Year*'
                  value={formik.values.projectYear}
                  placeholder='Year'
                  onChange={formik.handleChange}
                  type='number'
                />
                {formik.touched.projectYear &&
                  Boolean(formik.errors.projectYear) && (
                    <ErrorText text={formik.errors.projectYear} />
                  )}
              </div>
              <div>
                <InputWithLabel
                  id='projectCost'
                  name='projectCost'
                  label='Project Cost*'
                  placeholder='Enter Cost'
                  value={formik.values.projectCost}
                  onChange={formik.handleChange}
                  inputProps={{
                    startAdornment: (
                      <span className='text-secondary-light'>₹</span>
                    ),
                  }}
                />
                {formik.touched.projectCost &&
                  Boolean(formik.errors.projectCost) && (
                    <ErrorText text={formik.errors.projectCost} />
                  )}
              </div>
            </div>
          </section>
          <section className='flex flex-col space-y-4 bg-secondary-bright px-11 py-8 my-2 rounded-lg shadow-xl'>
            <div className='w-full text-start'>
              <h3 className='font-medium text-sm'>Category</h3>
            </div>
            <div className='flex space-x-2'>
              {categories.map((category: any, i: number) => {
                return (
                  <div key={i}>
                    <label
                      htmlFor={category.id}
                      className={`px-[22px] py-[11px] rounded-[29px] text-sm font-semibold  cursor-pointer  ${
                        formik.values.projectCategory === category.id
                          ? "bg-primary text-secondary-bright"
                          : "bg-[#f8f8f8] text-secondary-dark"
                      }`}
                    >
                      {category.label}
                    </label>
                    <input
                      type='radio'
                      name='category'
                      id={category.id}
                      className='hidden'
                      onClick={() =>
                        formik.setFieldValue("projectCategory", category.id)
                      }
                    />
                  </div>
                );
              })}
            </div>
            {formik.touched.projectCategory &&
              Boolean(formik.errors.projectCategory) && (
                <ErrorText text={formik.errors.projectCategory} />
              )}
          </section>
        </div>
        <div className='px-11 py-8 bg-secondary-bright rounded-lg shadow-xl flex flex-col space-y-4'>
          <div className='w-full text-start'>
            <h3 className='font-medium text-sm'>Select Content</h3>
          </div>
          <div className='flex items-center justify-center w-full h-full flex-col space-y-4'>
            <label
              htmlFor='projectImages'
              className='text-center cursor-pointer border-2 border-[#DCDBDDD6] w-10/12 h-4/5 rounded-lg flex items-center justify-center flex-col'
            >
              <img src={imagePlaceholder} alt='img placeholder' />
              <span className='font-semibold text-[#CDCDCD] text-base underline text-center'>
                {formik.values.projectImages.length > 0
                  ? "Uploaded"
                  : "Upload an image"}
              </span>
            </label>
            <p className='text-center text-secondary-extralight text-sm font-normal'>
              By uploading photos, you are approving their display by Houzz,
              saying that you either own the rights to the image or that you
              have permission or a license to do so from the copyright holder,
              and agreeing to abide by Amar designer's terms of use.
            </p>
            <label
              htmlFor='projectImages'
              className='w-full flex items-center justify-center'
            >
              <Button
                className='w-7/12'
                title={
                  formik.values.projectImages.length > 0
                    ? "Re-Upload"
                    : "Upload"
                }
                onClick={() => {}}
              />
            </label>
            <input
              type='file'
              className='hidden'
              id='projectImages'
              name='projectImages'
              accept='image/*'
              multiple
              onChange={(e) => setProjectImages(e)}
            />
          </div>
          {formik.touched.projectImages &&
            Boolean(formik.errors.projectImages) && (
              <ErrorText text={formik.errors.projectImages} />
            )}
        </div>
      </div>
      {/* <div className='w-full h-32 border-4 border-dashed border-[#DCDBDDD6] flex items-center justify-center cursor-pointer  hover:shadow-md hover:shadow-secondary-extralight rounded-lg'>
          <div className='flex space-x-2 text-4xl text-[#DCDBDDD6]'>
            <IoMdAddCircle />
            <span>Add</span>
          </div>
        </div> */}
      <div className='w-full flex items-center justify-end'>
        <div className='w-3/12'>
          <Button title='Save' onClick={formik.handleSubmit} />
        </div>
      </div>
    </div>
  )
}

export default EditProject