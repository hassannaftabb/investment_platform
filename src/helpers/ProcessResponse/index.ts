import { toast } from "react-toastify";

const processResponse = (
  response: any,
  successMessage: string,
  successCallback?: any,
  errorMessage?: string,
  errorCallback?: any
) => {
  const errorResponses = [
    400, 401, 402, 403, 404, 405, 406, 500, 501, 502, 503, 504, 505,
  ];
  if (response.status === 403 && response.message === "Forbidden resource") {
    toast.error(
      !errorMessage
        ? "Unauthorized, Most probably your session expired, please login again!"
        : errorMessage
    );
    setTimeout(() => {
      localStorage.clear();
      (window as Window).location = "/";
    }, 3000);
    if (errorCallback) {
      errorCallback();
    }
  } else if (errorResponses.includes(response.status)) {
    toast.error(response.message);
    console.log(errorCallback);
    if (errorCallback) {
      errorCallback();
    }
  } else {
    toast.success(successMessage);
    if (successCallback) {
      successCallback();
    }
  }
};

export default processResponse;
