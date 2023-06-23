export const Logout = async () => {
  try {
    localStorage.clear();
    (window as Window).location = "/";
  } catch (error: any) {
    console.log("An Error In API Call:", error);
    return {
      status: error.response.status,
      error,
      message: error.response.data.message,
    };
  }
};
