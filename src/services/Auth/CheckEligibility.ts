import axios from "axios";
export const checkUserEligibility = async (email: string) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_API_URL + `user/check-eligibility`,
      {
        email: email,
      }
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
