import axios from "axios";

export const GetAllDesignIdeaProjectsByCategoryIdApi = async (
  categoryId: number | string
) => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_API_URL +
        `admin/all-design-ideas-project-by-category/${categoryId}`
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
