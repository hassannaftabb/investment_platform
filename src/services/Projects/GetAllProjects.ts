import axios from "axios";
export const getAllProjectsApi = async () => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_API_URL + `projects/all`
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
