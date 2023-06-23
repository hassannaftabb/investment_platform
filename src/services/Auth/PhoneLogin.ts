import axios from "axios";
export const LoginUserViaPhoneNumberApi = async (data: any) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_API_URL + `auth/login-via-phone`,
      data
    );
    return response;
  } catch (error: any) {
    console.log("An Error In API Call:", error);
    return {
      status: error.response.status,
      error,
      message: error.response.data.message,
    };
  }
};
