import React from "react";
import StepsAndAuthLayout from "../../../layouts/StepsAndAuthLayout";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../sub-components/shared/Button/Button";
import SimpleDivider from "../../sub-components/shared/Divider/SimpleDivider";
import { useFormik } from "formik";
import { phoneValidationSchema } from "./schema";
import oval from "../../../assets/images/oval.png";
import LogoLight from "../../../assets/images/LogoLight.png";
import InputWithLabel from "../../sub-components/shared/Forms/InputWithLabel/InputWithLabel";
import IndianFlag from "../../../assets/images/IndianFlag.png";
import ErrorText from "../../sub-components/shared/ErrorText/ErrorText";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../../firebase";
import { toast } from "react-toastify";
import { MuiOtpInput } from "mui-one-time-password-input";
import * as yup from "yup";
import { LoginUserViaPhoneNumberApi } from "../../../services/Auth/PhoneLogin";
import processResponse from "../../../helpers/ProcessResponse";

type Props = {
  setIsLoading: any;
};

const PhoneLogin = ({ setIsLoading }: Props) => {
  const [otpField, setOtpField] = React.useState<boolean>(false);
  const [confirmation, setConfirmation] = React.useState<any>({});
  const phoneInputFormik = useFormik({
    initialValues: {
      phoneNumber: "",
    },
    validationSchema: phoneValidationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      const elem: any = document.getElementById("recaptcha-container");
      let verify = new RecaptchaVerifier(
        elem,
        {
          size: "invisible",
        },
        auth
      );
      signInWithPhoneNumber(auth, `+91${values.phoneNumber}`, verify)
        .then((confirmationResult) => {
          setIsLoading(false);
          setOtpField(true);
          setConfirmation(confirmationResult);
          toast.success("OTP sent successfully, please check your device.");
        })
        .catch((error) => {
          setIsLoading(false);
          console.log(error);
          toast.error("There is an error sending OTP!");
        });
    },
  });
  const navigate = useNavigate();
  const otpInputFormik = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: yup.object({
      otp: yup.string().min(6).max(6).required("OTP Is Required."),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      confirmation
        .confirm(values.otp)
        .then(async (res: any) => {
          console.log(res);
          const accessToken = res?.user?.accessToken;
          const phone = res?.user?.phoneNumber;
          if (accessToken && phone) {
            await LoginUserViaPhoneNumberApi({
              firebaseAccessToken: accessToken,
              phone,
            }).then((response: any) => {
              setIsLoading(false);
              if (!response.data.isExistingUser) {
                (
                  window as Window
                ).location = `/sign-up?step=1&phone=${phone}&firebaseAccessToken=${accessToken}`;
              } else if (response.data.isExistingUser) {
                const afterLoginSuccessCallback = () => {
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
                  afterLoginSuccessCallback
                );
              }
            });
          }
        })
        .catch((err: any) => {
          setIsLoading(false);
          toast.error(`${err.message}`);
        });
    },
  });

  return (
    <StepsAndAuthLayout>
      <div className='flex space-x-2 w-[90%] items-center h-[95%] justify-center'>
        <div className='h-5/6 bg-secondary-bright w-2/5 sm:w-full rounded-[32px] flex flex-col items-center justify-center text-black-2'>
          <div className='flex flex-col justify-evenly items-start w-3/4 h-full'>
            <h3 className='font-semibold text-3xl text-start'>
              {otpField
                ? "Please enter the OTP sent to your device."
                : "Log In With Phone Number"}
            </h3>
            <div className='flex flex-col space-y-5 w-full'>
              {!otpField ? (
                <div>
                  <InputWithLabel
                    type='number'
                    id='phoneNumber'
                    name='phoneNumber'
                    key={"phoneNumber"}
                    value={phoneInputFormik.values.phoneNumber}
                    onChange={(e) => {
                      if (e.target.value.length < 11) {
                        phoneInputFormik.handleChange(e);
                      }
                    }}
                    label='Enter your Phone Number'
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
                  {phoneInputFormik.touched.phoneNumber &&
                    Boolean(phoneInputFormik.errors.phoneNumber) && (
                      <ErrorText text={phoneInputFormik.errors.phoneNumber} />
                    )}
                </div>
              ) : (
                <div className='w-full'>
                  <MuiOtpInput
                    value={otpInputFormik.values.otp}
                    onChange={otpInputFormik.handleChange("otp")}
                    id='otp'
                    length={6}
                  />
                </div>
              )}
            </div>
            <div className='w-full'>
              <div id='recaptcha-container'></div>
              {!otpField ? (
                <Button
                  title='Send OTP'
                  onClick={phoneInputFormik.handleSubmit}
                />
              ) : (
                <Button
                  title='Verify OTP'
                  onClick={otpInputFormik.handleSubmit}
                />
              )}
            </div>

            <SimpleDivider />

            <div className='text-xs text-secondary-light font-normal leading-[17px]'>
              Protected by reCAPTCHA and subject to the{" "}
              <Link to={"/"} className='text-primary'>
                Amar Design's
              </Link>{" "}
              <Link to={"/"} className='text-primary'>
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link to={"/"} className='text-primary'>
                Terms of Service.
              </Link>
            </div>
          </div>
        </div>
        <div
          className={
            "h-full w-1/2 sm:hidden md:hidden lg:hidden rounded-tr-lg rounded-br-lg shadow-2xl"
          }
        >
          {/* Main content  */}

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
            {/* heading  */}
            <h1 className={"text-5xl text-secondary-bright font-semibold mb-6"}>
              One tool for your whole team needs
            </h1>
            {/* paragraph  */}
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
        </div>
      </div>
    </StepsAndAuthLayout>
  );
};

export default PhoneLogin;
