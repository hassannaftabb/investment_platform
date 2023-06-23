import { gapi } from "gapi-script";
import React, { useEffect } from "react";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import processResponse from "../../../../helpers/ProcessResponse";
import { LoginUserViaGoogleApi } from "../../../../services/Auth/Google";
import { FcGoogle } from "react-icons/fc";
const GoogleAuth = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: `${process.env.REACT_APP_GOOGLE_CLIENT_ID}`,
        scope: "email",
      });
    }

    gapi.load("client:auth2", start);
  }, []);
  const navigate = useNavigate();
  const onGoogleResponseSuccess = async (response: any) => {
    const accessToken = response.accessToken;
    const email = response.profileObj.email;
    if (accessToken && email) {
      await LoginUserViaGoogleApi({
        googleAccessToken: accessToken,
        email,
      }).then((response: any) => {
        if (!response.data.isExistingUser) {
          (
            window as Window
          ).location = `/sign-up?step=1&email=${email}&googleAccessToken=${accessToken}`;
        } else if (response.data.isExistingUser) {
          const afterLoginSuccessCallback = () => {
            localStorage.setItem(
              "AmarDesignUserObj",
              JSON.stringify(response.data)
            );
            localStorage.setItem("token", response.data.accessToken);
            navigate("/");
          };
          processResponse(response, "Welcome back!", afterLoginSuccessCallback);
        }
      });
    }
  };
  return (
    <GoogleLogin
      clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
      buttonText="Login"
      render={(renderProps) => (
        <div
          className="flex justify-center  items-center cursor-pointer rounded-[10px] py-[0.5rem] basis-[50%] !border !border-secondary-extralight-2 bg-secondary-bright  sm:min-w-[60%]"
          // onClick={renderProps.onClick}
        >
          <div className="flex justify-center items-center gap-3">
            <FcGoogle size={23} />
            <span className="font-semibold text-[13px]">Google</span>
          </div>
        </div>
      )}
      onSuccess={onGoogleResponseSuccess}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleAuth;
