import Instance from "./Interceptors";

const handleAddComments = async (data) => {
  try {
    const response = await Instance({
      url: "/comment",
      data,
      method: "POST",
    });
    return response;
  } catch (err) {
    return err
  }
};
const handleDeleteComments = async (id) => {
  try {
    const response = await Instance({
      url: `/comment/${id}`,
      method: "DELETE",
    });
    return response;
  } catch (err) {
    return err
  }
};

export { handleAddComments, handleDeleteComments };
