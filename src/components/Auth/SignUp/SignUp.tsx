import React, { useState } from "react";
import StepsAndAuthLayout from "../../../layouts/StepsAndAuthLayout";
import Credentials from "./sub-components/Credentials/Credentials";
import { useFormik } from "formik";
import BasicInfo from "./sub-components/BasicInfo/BasicInfo";
import BusinessDetails from "./sub-components/BusinessDetail/BusinessDetails";
import { addUser } from "../../../services/Auth/CreateUser";
import PreAddProject from "./sub-components/Projects/PreAddProject";
import processResponse from "../../../helpers/ProcessResponse";
import { addProject } from "../../../services/Projects/AddProject";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import ProjectsDock from "./sub-components/Projects/ProjectsDock";
import { projects } from "./sub-components/Projects/repo/ProjectRepo";

type Props = {
  setIsLoading: any;
};

const SignUp = ({ setIsLoading }: Props) => {
  const directStep =
    parseInt(new URLSearchParams(window.location.search).get("step") || "") ||
    0;
  const email = new URLSearchParams(window.location.search).get("email");
  const phone = new URLSearchParams(window.location.search).get("phone");
  const googleAccessToken = new URLSearchParams(window.location.search).get(
    "googleAccessToken"
  );
  const facebookAccessToken = new URLSearchParams(window.location.search).get(
    "facebookAccessToken"
  );
  const firebaseAccessToken = new URLSearchParams(window.location.search).get(
    "firebaseAccessToken"
  );
  const navigate = useNavigate();
  const [step, setStep] = useState<number>(directStep);

  const createUserFormik = useFormik({
    initialValues: {
      email: email ? email : "",
      password: "",
      companyName: "",
      phone: phone ? phone : "",
      category: "",
      address1: "",
      address2: "",
      city: "",
      isStreetAddressPrivate: false,
      country: "",
      pinCode: "",
      phoneNumber: "",
      state: "",
      website: "",
      businessDescription: "",
      certificatesAndAwards: "",
      costFrom: "",
      costTo: "",
      photo: "",
      logo: "",
      facebook: "",
      instagram: "",
    },
    validationSchema: yup.object({
      ...(!phone && {
        email: yup
          .string()
          .email("Please provide a valid email!")
          .required("Email is required!"),
      }),
      ...(!email &&
        !phone && {
          password: yup
            .string()
            .min(6, "Password must be at least 6 numbers!")
            .required("Password is required!"),
        }),
      companyName: yup.string().required("Company Name is required!"),
      category: yup.string().required("Category is required!"),
      address1: yup.string().required("Address is required!"),
      city: yup.string().required("City is required!"),
      isStreetAddressPrivate: yup
        .boolean()
        .required("isStreetAddressPrivate is required!"),
      country: yup.string().required("Country is required!"),
      pinCode: yup.string().required("Pin Code is required!"),
      phoneNumber: yup.string().required("Phone Number is required!"),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("email", values.email);
      formData.append("password", values.password);
      formData.append("basicInfo[companyName]", values.companyName);
      formData.append("basicInfo[category]", values.category);
      formData.append("basicInfo[address1]", values.address1);
      formData.append("basicInfo[address2]", values.address2);
      formData.append("basicInfo[city]", values.city);
      formData.append(
        "basicInfo[isStreetAddressPrivate]",
        JSON.stringify(values.isStreetAddressPrivate)
      );
      formData.append("basicInfo[country]", values.country);
      formData.append("basicInfo[pinCode]", values.pinCode);
      formData.append("basicInfo[phoneNumber]", `+91${values.phoneNumber}`);
      formData.append("basicInfo[state]", values.state);
      formData.append("businessDetails[website]", values.website);
      formData.append(
        "businessDetails[businessDescription]",
        values.businessDescription
      );
      formData.append(
        "businessDetails[certificatesAndAwards]",
        values.certificatesAndAwards
      );
      formData.append(
        "businessDetails[typicalJobCost]",
        JSON.stringify({
          from: values.costFrom,
          to: values.costTo,
        })
      );
      formData.append("businessDetails[facebook]", values.facebook);
      formData.append("businessDetails[instagram]", values.instagram);
      formData.append("logo", values.logo);
      formData.append("businessDetailPhoto", values.photo);
      phone && formData.append("phone", `+${phone?.trim()}`);
      googleAccessToken &&
        formData.append("googleAccessToken", googleAccessToken);
      facebookAccessToken &&
        formData.append("facebookAccessToken", facebookAccessToken);
      firebaseAccessToken &&
        formData.append("firebaseAccessToken", firebaseAccessToken);
      await addUser(formData).then((response: any) => {
        if (
          projects.length > 0 &&
          projects[0].projectAddress &&
          projects[0].projectCategory &&
          projects[0].projectName
        ) {
          try {
            projects.forEach(async (project) => {
              const formData = new FormData();
              formData.append("projectName", project.projectName);
              formData.append("projectAddress", project.projectAddress);
              formData.append("projectCategory", project.projectCategory);
              formData.append("projectCost", project.projectCost);
              formData.append("projectYear", project.projectYear);
              project.projectImages.forEach((img) =>
                formData.append("projectImages", img)
              );
              await addProject(response.data.id, formData);
            });
            setIsLoading(false);
            processResponse(response, "Things are working!", () =>
              navigate(`/welcome`)
            );
          } catch (error) {
            setIsLoading(false);
            toast.error(`${error}`);
          }
        } else {
          setIsLoading(false);
          processResponse(response, "Things are working!", () =>
            navigate(`/welcome`)
          );
        }
      });
    },
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  return (
    <>
      {(() => {
        switch (step) {
          case 0:
            return (
              <StepsAndAuthLayout>
                <Credentials nextStep={nextStep} formik={createUserFormik} />
              </StepsAndAuthLayout>
            );
          case 1:
            return (
              <section className='bg-secondary-dark w-full py-4 min-h-[100vh] flex items-center justify-center text-secondary-bright font-poppins'>
                <BasicInfo nextStep={nextStep} formik={createUserFormik} />
              </section>
            );
          case 2:
            return (
              <StepsAndAuthLayout>
                <BusinessDetails
                  nextStep={nextStep}
                  formik={createUserFormik}
                />
              </StepsAndAuthLayout>
            );
          case 3:
            return (
              <StepsAndAuthLayout>
                <PreAddProject
                  nextStep={nextStep}
                  skipProjects={createUserFormik.handleSubmit}
                />
              </StepsAndAuthLayout>
            );
          case 4:
            return <ProjectsDock submit={createUserFormik.handleSubmit} />;
          default:
            break;
        }
      })()}
    </>
  );
};

export default SignUp;
