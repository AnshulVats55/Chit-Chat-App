import authorizedInstance from "./Interceptors";

const PostApi = () => {
  const createPost = async (datapost, currentUserId) => {
    let data = {
      userId: currentUserId,
      body: datapost.postDesc,
      attachment: datapost.postMedia,
    };

    const response = await authorizedInstance.post("/post/", data);
    return response;
  };

  const getPosts = async () => {
    const response = await authorizedInstance.get("/post/feedPost");
    return response.data.data;
  };

  const deletePost = async (id) => {
    const response = await authorizedInstance.delete(`/post/delete/${id}`);
    return response;
  };
  
  return { createPost, getPosts, deletePost };
};

export default PostApi;
