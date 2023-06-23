import axios from "axios";

export const GetDesignIdeaProjectByIdApi = async (
  projectId: string | number
) => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_API_URL + `admin/design-ideas-project/${projectId}`
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
