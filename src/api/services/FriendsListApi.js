import Instance from "./Interceptors";

const getFriends = async (userId) => {
  try {
    const response = await Instance({
      url: `/relationship/all/${userId}`,
      method: "GET",
    });
    return response.data.data;
  } catch (error) {
    return error;
  }
};

export { getFriends };
