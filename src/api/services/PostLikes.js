import Instance from "./Interceptors";

export const handleAddLikes = async (data) => {
  try {
    const response = await Instance({
      url: "/like",
      data,
      method: "POST",
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const handleDeleteLikes = async (id) => {
  try {
    const response = await Instance({
      url: `/like/${id}`,
      method: "DELETE",
    });
    return response;
  } catch (error) {
    return error;
  }
};
