import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import BasicInput from '../../../sub-components/shared/Forms/BasicInput/BasicInput'
import ErrorText from '../../../sub-components/shared/ErrorText/ErrorText'
import Button from '../../../sub-components/shared/Button/Button'
import { ProfileUpdateSchema } from '../EditFormSchema/ProfileSchema'
import { MenuItem, Select } from '@mui/material'

const ProfileForm = () => {
  const navigate=useNavigate()
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  
  const ProfileUpdateFormik = useFormik({
    initialValues: {
      name:"",
      category: "",
      address1: "",
      address2: "",
      city: "",
      country: "",
      pinCode: "",
      phoneNumber: "",
      state: "",
      companyName:"",
      experience:"",
      email: "",
      message:""
    },
    enableReinitialize: true,
    validationSchema: ProfileUpdateSchema,
    onSubmit: (values) => {
      navigate("/profile") 
    },
  });
  return (
    <div>
      <h2 className=' text-2xl my-3 font-mulish font-bold text-center'>Update Profile</h2>
      <div className='flex flex-col w-[60%] sm:w-full m-auto'>
          <BasicInput
            label='Name'
            id='name'
            name='name'
            type='text'
            required
            value={ ProfileUpdateFormik.values.name}
            onChange={ ProfileUpdateFormik.handleChange}
          />
          { ProfileUpdateFormik.touched.name &&
            Boolean( ProfileUpdateFormik.errors.name) && (
              <ErrorText text={ ProfileUpdateFormik.errors.name} />
            )}
          <div className=' h-9'/>
          <BasicInput
            label='Email'
            id='email'
            name='email'
            type='email'
            required
            value={ ProfileUpdateFormik.values.email}
            onChange={ ProfileUpdateFormik.handleChange}
          />
          { ProfileUpdateFormik.touched.email &&
            Boolean( ProfileUpdateFormik.errors.email) && (
              <ErrorText text={ ProfileUpdateFormik.errors.email} />
            )}
          <div className=' h-9'/>
          <div>
            <label
              htmlFor={"category"}
              className=' font-poppins text-xs'
            >
              Category*
            </label>
            <Select
              id='category'
              label='Category'
              placeholder='Category*'
              value={ProfileUpdateFormik.values.category}
              variant='standard'
              name='category'
              onChange={ProfileUpdateFormik.handleChange}
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
            {ProfileUpdateFormik.touched.category &&
              Boolean(ProfileUpdateFormik.errors.category) && (
                <ErrorText text={ProfileUpdateFormik.errors.category} />
              )}
          </div>
          <div className=' h-9'/>
          <BasicInput
            label='Address Line 1'
            id='address1'
            name='address1'
            type='text'
            required
            value={ ProfileUpdateFormik.values.address1}
            onChange={ ProfileUpdateFormik.handleChange}
          />
          { ProfileUpdateFormik.touched.address1 &&
            Boolean( ProfileUpdateFormik.errors.address1) && (
              <ErrorText text={ ProfileUpdateFormik.errors.address1} />
            )}
          <div className=' h-9'/>
          <BasicInput
            label='Address Line 2'
            id='address2'
            name='address2'
            type='text'
            value={ ProfileUpdateFormik.values.address2}
            onChange={ ProfileUpdateFormik.handleChange}
          />
          { ProfileUpdateFormik.touched.address2 &&
            Boolean( ProfileUpdateFormik.errors.address2) && (
              <ErrorText text={ ProfileUpdateFormik.errors.address2} />
            )}
          <div className=' h-9'/>
          <BasicInput
            label='City'
            id='city'
            name='city'
            type='text'
            required
            value={ ProfileUpdateFormik.values.city}
            onChange={ ProfileUpdateFormik.handleChange}
          />
          { ProfileUpdateFormik.touched.city &&
            Boolean( ProfileUpdateFormik.errors.city) && (
              <ErrorText text={ ProfileUpdateFormik.errors.city} />
            )}
          <div className=' h-9'/>
          <BasicInput
            label='Country'
            id='country'
            name='country'
            type='text'
            required
            value={ ProfileUpdateFormik.values.country}
            onChange={ ProfileUpdateFormik.handleChange}
          />
          { ProfileUpdateFormik.touched.country &&
            Boolean( ProfileUpdateFormik.errors.country) && (
              <ErrorText text={ ProfileUpdateFormik.errors.country} />
            )}
          <div className=' h-9'/>
          <BasicInput
            label='Pin Code'
            id='pinCode'
            name='pinCode'
            type='text'
            required
            value={ ProfileUpdateFormik.values.pinCode}
            onChange={ ProfileUpdateFormik.handleChange}
          />
          { ProfileUpdateFormik.touched.pinCode &&
            Boolean( ProfileUpdateFormik.errors.pinCode) && (
              <ErrorText text={ ProfileUpdateFormik.errors.pinCode} />
            )}
          <div className=' h-9'/>
          <BasicInput
            label='Phone Number'
            id='phoneNumber'
            name='phoneNumber'
            type='text'
            required
            value={ ProfileUpdateFormik.values.phoneNumber}
            onChange={ ProfileUpdateFormik.handleChange}
          />
          { ProfileUpdateFormik.touched.phoneNumber &&
            Boolean( ProfileUpdateFormik.errors.phoneNumber) && (
              <ErrorText text={ ProfileUpdateFormik.errors.phoneNumber} />
            )}
          <div className=' h-9'/>
          <BasicInput
            label='State'
            id='state'
            name='state'
            type='text'
            required
            value={ ProfileUpdateFormik.values.state}
            onChange={ ProfileUpdateFormik.handleChange}
          />
          { ProfileUpdateFormik.touched.state &&
            Boolean( ProfileUpdateFormik.errors.state) && (
              <ErrorText text={ ProfileUpdateFormik.errors.state} />
            )}
          <div className=' h-9'/>
          <BasicInput
            label='Company Name'
            id='companyName'
            name='companyName'
            type='text'
            required
            value={ ProfileUpdateFormik.values.companyName}
            onChange={ ProfileUpdateFormik.handleChange}
          />
          { ProfileUpdateFormik.touched.companyName &&
            Boolean( ProfileUpdateFormik.errors.companyName) && (
              <ErrorText text={ ProfileUpdateFormik.errors.companyName} />
            )}
          <div className=' h-9'/>
          <BasicInput
            label='Experience'
            id='Experience'
            name='experience'
            type='text'
            required
            value={ ProfileUpdateFormik.values.experience}
            onChange={ ProfileUpdateFormik.handleChange}
          />
          { ProfileUpdateFormik.touched.experience &&
            Boolean( ProfileUpdateFormik.errors.experience) && (
              <ErrorText text={ ProfileUpdateFormik.errors.experience} />
            )}
          <div className=' h-9'/>
          <Button
            title='Update'
            className='mt-11'
            onClick={ProfileUpdateFormik.handleSubmit}
          />
        </div>
    </div>
  )
}

export default ProfileForm