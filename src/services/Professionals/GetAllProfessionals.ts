import axios from "axios";
export const getAllProfessionals = async (category?: string) => {
  let url = `user/professionals`;
  if (category) {
    url += `?category=${category}`;
  }
  try {
    const response = await axios.get(process.env.REACT_APP_API_URL + url);
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
