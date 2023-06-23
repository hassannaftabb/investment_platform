import React, { useState } from "react";
import Button from "../../../../sub-components/shared/Button/Button";
import { BasicInfoPropTypes } from "./types";
import { useFormik } from "formik";
import InputWithLabel from "../../../../sub-components/shared/Forms/InputWithLabel/InputWithLabel";
import TextAreaInputWithLabel from "../../../../sub-components/shared/Forms/TextAreaInputWithLabel/TextAreaInputWithLabel";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import imagePlaceholder from "../../../../../assets/images/img_placeholder.png";
import { toast } from "react-toastify";

const BusinessDetails = ({ nextStep, formik }: BasicInfoPropTypes) => {
  const [logoUrl, setLogoUrl] = useState("");
  const [businessPhotoUrl, setBusinessPhotoUrl] = useState("");
  const businessDetailsFormik = useFormik({
    initialValues: {
      website: formik.values.website,
      businessDescription: formik.values.businessDescription,
      certificatesAndAwards: formik.values.certificatesAndAwards,
      costFrom: formik.values.costFrom,
      costTo: formik.values.costTo,
      photo: formik.values.photo,
      facebook: formik.values.facebook,
      instagram: formik.values.instagram,
    },
    enableReinitialize: true,
    onSubmit: async () => {
      toast.success(
        `Things are looking just perfect, Let's add your first project.`
      );
      nextStep();
    },
  });

  const setLogoImage = (e: any) => {
    formik.setFieldValue("logo", e.target.files[0]);
    const logourl = URL.createObjectURL(e.target.files[0]);
    setLogoUrl(logourl);
  };
  const setBusinessImage = (e: any) => {
    formik.setFieldValue("photo", e.target.files[0]);
    const bfUrl = URL.createObjectURL(e.target.files[0]);
    setBusinessPhotoUrl(bfUrl);
  };
  return (
    <div className='min-h-[90%] sm:w-[90%] bg-secondary-bright w-2/3 rounded-[32px] flex flex-col items-center justify-center text-black-2 font-mulish py-[2.5%]'>
      <div className='flex flex-col justify-evenly items-center w-5/6 h-full'>
        <div className='font-mulish'>
          <h3 className='font-semibold text-2xl leading-[45.18px] text-center mb-5'>
            Business Details
          </h3>
        </div>
        <div className='w-full grid grid-cols-2 gap-x-4 sm:block' >
          <div className='flex flex-col justify-evenly gap-2'>
            <h3 className='text-base text-primary font-semibold'>
              Business Details
            </h3>
            <div>
              <InputWithLabel
                type='text'
                id='website'
                name='website'
                key={"website"}
                value={formik.values.website}
                onChange={formik.handleChange}
                label='Website'
                placeholder='http://'
              />
            </div>
            <div>
              <TextAreaInputWithLabel
                id='businessDescription'
                name='businessDescription'
                label='Business Description'
                value={formik.values.businessDescription}
                onChange={formik.handleChange}
                placeholder='Tell your customer about yourself and what makes your business unique.'
                minRows={4}
              />
            </div>
            <div>
              <div className='flex flex-col space-y-2'>
                <div>
                  <h3 className='text-base text-primary font-semibold'>
                    Social Media Accounts
                  </h3>
                </div>
                <div className='grid grid-cols-2 gap-x-2'>
                  <InputWithLabel
                    id='facebook'
                    name='facebook'
                    placeholder='Facebook'
                    type='text'
                    value={formik.values.facebook}
                    onChange={formik.handleChange}
                    inputProps={{
                      startAdornment: <AiFillFacebook />,
                    }}
                  />
                  <InputWithLabel
                    id='instagram'
                    name='instagram'
                    type='text'
                    placeholder='Instagram'
                    value={formik.values.instagram}
                    onChange={formik.handleChange}
                    inputProps={{
                      startAdornment: <AiFillInstagram />,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-between space-y-2'>
            <div className='flex flex-col space-y-2'>
              <div >
                <h3 className='text-base text-primary font-semibold text-center'>
                  Upload Business Logo
                </h3>
              </div>
              <label htmlFor='logo'>
                {!logoUrl ? (
                  <div className='flex items-center justify-center flex-col space-y-2'>
                    <img
                      src={imagePlaceholder}
                      alt='img placeholder'
                      className='h-16 w-16'
                    />
                    <span className='font-semibold text-[#CDCDCD] text-sm underline'>
                      Upload Logo
                    </span>
                  </div>
                ) : (
                  <div className='flex items-center justify-center'>
                    <img
                      src={logoUrl}
                      alt='logo'
                      className='h-16 w-16 rounded-full'
                    />
                  </div>
                )}
              </label>
              <input
                type='file'
                className='hidden'
                id='logo'
                name='logo'
                accept='image/*'
                onChange={(e) => setLogoImage(e)}
              />
            </div>
            <div className='flex flex-col space-y-2'>
              <div>
                <h3 className='text-base text-primary font-semibold text-center'>
                  Upload Business Photo
                </h3>
              </div>
              <label htmlFor='photo'>
                {!businessPhotoUrl ? (
                  <div className='flex items-center justify-center flex-col space-y-2'>
                    <img
                      src={imagePlaceholder}
                      alt='img placeholder'
                      className='h-24 w-24'
                    />
                    <span className='font-semibold text-[#CDCDCD] text-sm underline'>
                      Upload a image
                    </span>
                  </div>
                ) : (
                  <div className='flex items-center justify-center'>
                    <img
                      src={businessPhotoUrl}
                      alt='logo'
                      className='h-36 w-1/2 rounded-lg'
                    />
                  </div>
                )}
              </label>
              <input
                type='file'
                className='hidden'
                id='photo'
                name='photo'
                accept='image/*'
                onChange={(e) => setBusinessImage(e)}
              />
            </div>
          </div>
        </div>
        <div className='w-full mt-8'>
          <Button title='Next' onClick={businessDetailsFormik.handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;
