import React from "react";
import StepsAndAuthLayout from "../../../layouts/StepsAndAuthLayout";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BasicInput from "../../sub-components/shared/Forms/BasicInput/BasicInput";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import FacebookLogin from "../SocialMedia/Facebook/FacebookLogin";
import Button from "../../sub-components/shared/Button/Button";
import SimpleDivider from "../../sub-components/shared/Divider/SimpleDivider";
import ErrorText from "../../sub-components/shared/ErrorText/ErrorText";
import { useFormik } from "formik";
import { signInValidationSchema } from "./schema";
import { LoginUserViaEmailApi } from "../../../services/Auth/Login";
import processResponse from "../../../helpers/ProcessResponse";
// import oval from "../../../assets/images/oval.png";
// import LogoLight from "../../../assets/images/LogoLight.png";
import GoogleAuth from "../SocialMedia/Google/GoogleLogin";

type Props = {
  setIsLoading: any;
};

const SignIn = ({ setIsLoading }: Props) => {
  const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);
  const navigate = useNavigate();

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    enableReinitialize: true,
    validationSchema: signInValidationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      const response: any = await LoginUserViaEmailApi(values);
      const afterLoginSuccessCallback = () => {
        setIsLoading(false);
        localStorage.setItem(
          "AmarDesignUserObj",
          JSON.stringify(response.data)
        );
        localStorage.setItem("token", response.data.accessToken);
        navigate("/");
      };
      processResponse(
        response,
        "Welcome back!",
        afterLoginSuccessCallback,
        undefined,
        () => setIsLoading(false)
      );
    },
  });

  return (
    <StepsAndAuthLayout>
      <div className="flex space-x-2 w-[90%] items-center h-[95%] justify-center">
        <div className="h-[92%] bg-secondary-bright w-2/5 sm:w-full rounded-[32px] py-[1%] flex flex-col items-center justify-center text-black-2">
          <div className="flex flex-col justify-evenly items-start w-3/4 h-full">
            <h3 className="font-semibold text-3xl text-start">Log In</h3>
            <span className="text-xs font-semibold">
              <span>New user?</span>{" "}
              <Link to={"/sign-up"} className="text-primary">
                Sign Up
              </Link>
            </span>
            <div className="flex flex-col space-y-5 w-full">
              <div>
                <BasicInput
                  label="Email Address"
                  type="email"
                  id="email"
                  name="email"
                  key={"email"}
                  value={loginFormik.values.email}
                  onChange={loginFormik.handleChange}
                />
                {loginFormik.touched.email &&
                  Boolean(loginFormik.errors.email) && (
                    <ErrorText text={loginFormik.errors.email} />
                  )}
              </div>
              <div>
                <BasicInput
                  label="Password"
                  id="password"
                  name="password"
                  key={"password"}
                  value={loginFormik.values.password}
                  onChange={loginFormik.handleChange}
                  type={passwordVisibility ? "text" : "password"}
                  inputProps={{
                    endAdornment: passwordVisibility ? (
                      <AiFillEye
                        className="text-secondary-light cursor-pointer"
                        onClick={() =>
                          setPasswordVisibility(!passwordVisibility)
                        }
                      />
                    ) : (
                      <AiFillEyeInvisible
                        className="text-secondary-light cursor-pointer"
                        onClick={() =>
                          setPasswordVisibility(!passwordVisibility)
                        }
                      />
                    ),
                  }}
                />
                {loginFormik.touched.password &&
                  Boolean(loginFormik.errors.password) && (
                    <ErrorText text={loginFormik.errors.password} />
                  )}
              </div>
            </div>

            {/* <div className="w-full text-center text-secondary-light text-sm flex space-x-2 items-center">
              <span className="h-[1px] bg-[#DCDBDD] w-full"></span>{" "}
              <span>or</span>
              <span className="h-[1px] bg-[#DCDBDD] w-full"></span>
            </div> */}

            {/* <Link
              to={"/login-with-phone"}
              className="text-center flex items-center justify-center border-2 border-primary w-full h-12 cursor-pointer rounded-lg"
            >
              Login With Phone
            </Link> */}

            {/* <div className="flex justify-between items-center w-full gap-3 sm:flex-col">
              <GoogleAuth />
              <FacebookLogin />
            </div> */}

            <div className="grid grid-cols-2 w-full">
              <Link
                to={"/"}
                className="text-primary font-medium font-poppins text-sm flex items-center justify-center"
              >
                Forgot Your Password?
              </Link>{" "}
              <Button title="Log In" onClick={loginFormik.handleSubmit} />
            </div>

            <SimpleDivider />

            <div className="text-xs text-secondary-light font-normal leading-[17px]">
              Protected by reCAPTCHA and subject to
              <Link to={"/"} className="text-primary">
                our
              </Link>{" "}
              <Link to={"/"} className="text-primary">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link to={"/"} className="text-primary">
                Terms of Service.
              </Link>
            </div>
          </div>
        </div>
        {/* <div
          className={
            "h-full w-1/2 sm:hidden md:hidden lg:hidden rounded-tr-lg rounded-br-lg shadow-2xl"
          }
        >

          <div
            className={
              "flex justify-center h-full flex-col items-start w-[80%] mx-auto text-secondary-light"
            }
          >
            <div className='flex space-x-2 items-center mb-7'>
              <img src={LogoLight} alt='logo' />
              <span className='font-bold text-secondary-bright text-2xl'>
                Amar Designer
              </span>
            </div>
            <h1 className={"text-5xl text-secondary-bright font-semibold mb-6"}>
              One tool for your whole team needs
            </h1>
            <p className={"font-normal text-sm mb-8"}>
              We are lorem ipsum team dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
            <div
              className={
                "flex items-center justify-start space-x-2 font-poppins"
              }
            >
              <div className='flex -space-x-2'>
                <img src={oval} alt='oval' />
                <img src={oval} alt='oval' />
                <img src={oval} alt='oval' />
              </div>
              <p className='text-sm font-semibold text-secondary-bright'>
                3k+ people joined us, now it's your turn
              </p>
            </div>
          </div>
        </div>  */}
      </div>
    </StepsAndAuthLayout>
  );
};

export default SignIn;
