import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../../sub-components/shared/Button/Button";
import { BasicInfoPropTypes } from "./types";
import ErrorText from "../../../../sub-components/shared/ErrorText/ErrorText";
import { useFormik } from "formik";
import { basicInfoValidationSchema } from "./schema";
import InputWithLabel from "../../../../sub-components/shared/Forms/InputWithLabel/InputWithLabel";
import IndianFlag from "../../../../../assets/images/IndianFlag.png";
import { MenuItem, Select } from "@mui/material";
import { toast } from "react-toastify";

const BasicInfo = ({ nextStep, formik }: BasicInfoPropTypes) => {
  const basicInfoFormik = useFormik({
    initialValues: {
      companyName: formik.values.companyName,
      category: formik.values.companyName,
      address1: formik.values.address1,
      address2: formik.values.address2,
      city: formik.values.city,
      isStreetAddressPrivate: formik.values.isStreetAddressPrivate,
      country: formik.values.country,
      pinCode: formik.values.pinCode,
      phoneNumber: formik.values.phoneNumber,
      state: formik.values.state,
    },
    enableReinitialize: true,
    validationSchema: basicInfoValidationSchema,
    onSubmit: async () => {
      toast.success(`Great! Now tell us about your business!`);
      nextStep();
    },
  });

  return (
    <div className='min-h-[95%] pt-4 pb-8 sm:w-[90%] overflow-hidden bg-secondary-bright w-2/4 rounded-[32px] flex flex-col items-center justify-center text-black-2'>
      <div className='flex flex-col justify-evenly items-center w-5/6 h-full'>
        <div className='font-mulish'>
          <h3 className='font-semibold text-2xl leading-[45.18px] text-center'>
            Basic Info
          </h3>
          <p className='text-xs leading-[17.57px] font-medium'>
            Tell us a little about your business. (Not a professional? Continue
            to{" "}
            <Link to={"/"} className='text-primary'>
              Amar Designer
            </Link>
            )
          </p>
        </div>
        <div className='w-full flex flex-col space-y-1'>
          <div>
            <InputWithLabel
              type='text'
              id='companyName'
              name='companyName'
              key={"companyName"}
              value={formik.values.companyName}
              onChange={formik.handleChange}
              label='Professional/Company Name*'
              placeholder='Minimum 4 Character'
            />
            {basicInfoFormik.touched.companyName &&
              Boolean(basicInfoFormik.errors.companyName) && (
                <ErrorText text={basicInfoFormik.errors.companyName} />
              )}
          </div>
          <div>
            <label
              htmlFor={"category"}
              className='font-mulish leading-[17px] font-bold text-xs'
            >
              Category*
            </label>
            <Select
              id='category'
              value={formik.values.category}
              name='category'
              onChange={formik.handleChange}
              className='w-full'
              sx={{
                "& .MuiSelect-select": {
                  padding: "8.5px 14px",
                  fontSize: "14px",
                },
              }}
            >
              <MenuItem value={"Interior Designers"}>
                Interior Designers
              </MenuItem>
              <MenuItem value={"Architects"}>Architects</MenuItem>
              <MenuItem value={"Civil Engineer"}>Civil Engineer</MenuItem>
              <MenuItem value={"Landscape Architects"}>
                Landscape Architects
              </MenuItem>
              <MenuItem value={"Home Builders"}>Home Builders</MenuItem>
              <MenuItem value={"Moduler Furniture"}>Moduler Furniture</MenuItem>
              <MenuItem value={"General Contractor"}>
                General Contractor
              </MenuItem>
              <MenuItem value={"Construction Companies"}>
                Construction Companies
              </MenuItem>
            </Select>
            {basicInfoFormik.touched.category &&
              Boolean(basicInfoFormik.errors.category) && (
                <ErrorText text={basicInfoFormik.errors.category} />
              )}
          </div>
          <div>
            <InputWithLabel
              type='text'
              id='address1'
              name='address1'
              key={"address1"}
              value={formik.values.address1}
              onChange={formik.handleChange}
              label='Address Line 1*'
              placeholder='City / Country'
            />
            {basicInfoFormik.touched.address1 &&
              Boolean(basicInfoFormik.errors.address1) && (
                <ErrorText text={basicInfoFormik.errors.address1} />
              )}
            {/* <CustomCheckbox
              label='Make your street address private.'
              onChange={(e: any, checked: any) =>
                formik.setFieldValue("isStreetAddressPrivate", checked)
              }
            /> */}
          </div>
          <div>
            <InputWithLabel
              type='text'
              id='address2'
              name='address2'
              key={"address2"}
              value={formik.values.address2}
              onChange={formik.handleChange}
              label='Address Line 2'
              placeholder='Street Address'
            />
          </div>
          <div className='grid grid-cols-2 gap-x-4'>
            <div>
              <InputWithLabel
                type='text'
                id='city'
                name='city'
                key={"city"}
                value={formik.values.city}
                onChange={formik.handleChange}
                label='City*'
                placeholder='City'
              />
              {basicInfoFormik.touched.city &&
                Boolean(basicInfoFormik.errors.city) && (
                  <ErrorText text={basicInfoFormik.errors.city} />
                )}
            </div>
            <div>
              <InputWithLabel
                type='text'
                id='state'
                name='state'
                key={"state"}
                value={formik.values.state}
                onChange={formik.handleChange}
                label='State*'
                placeholder='State'
              />
              {basicInfoFormik.touched.state &&
                Boolean(basicInfoFormik.errors.state) && (
                  <ErrorText text={basicInfoFormik.errors.state} />
                )}
            </div>
          </div>
          <div className='grid grid-cols-2 gap-x-4'>
            <div>
              <InputWithLabel
                type='text'
                id='country'
                name='country'
                key={"country"}
                value={formik.values.country}
                onChange={formik.handleChange}
                label='Country*'
                placeholder='Country'
              />
              {basicInfoFormik.touched.country &&
                Boolean(basicInfoFormik.errors.country) && (
                  <ErrorText text={basicInfoFormik.errors.country} />
                )}
            </div>
            <div>
              <InputWithLabel
                type='number'
                id='pinCode'
                name='pinCode'
                key={"pinCode"}
                value={formik.values.pinCode}
                onChange={formik.handleChange}
                label='PIN Code*'
                placeholder='PIN Code'
              />
              {basicInfoFormik.touched.pinCode &&
                Boolean(basicInfoFormik.errors.pinCode) && (
                  <ErrorText text={basicInfoFormik.errors.pinCode} />
                )}
            </div>
          </div>
          <div>
            <InputWithLabel
              type='number'
              id='phoneNumber'
              name='phoneNumber'
              key={"phoneNumber"}
              value={formik.values.phoneNumber}
              onChange={(e) => {
                if (e.target.value.length < 11) {
                  formik.handleChange(e);
                }
              }}
              label='Phone Number*'
              inputProps={{
                startAdornment: (
                  <div className='flex items-center space-x-1'>
                    <img src={IndianFlag} alt='Indian Flag' />
                    <span className='text-sm text-secondary-light font-poppins'>
                      +91
                    </span>
                  </div>
                ),
                max: 10,
              }}
            />
            {basicInfoFormik.touched.phoneNumber &&
              Boolean(basicInfoFormik.errors.phoneNumber) && (
                <ErrorText text={basicInfoFormik.errors.phoneNumber} />
              )}
            <div className='mt-2 mb-2 text-xs font-normal text-secondary-light'>
              Standard call, messaging or data rates may apply.
            </div>
          </div>
        </div>
        <div className='w-full'>
          <Button title='Continue' onClick={basicInfoFormik.handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
