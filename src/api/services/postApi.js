import authorizedInstance from "./Interceptors";

const PostApi = () => {
  const createPost = async (datapost, currentUserId) => {
    let data = {
      userId: currentUserId,
      body: datapost.postDesc,
      attachment: datapost.postMedia,
    };

    try{
      const response = await authorizedInstance.post("/post/", data);
      return response;
    }
    catch(error){
      return error;
    }
  };

  const getPosts = async () => {
    try{
      const response = await authorizedInstance.get("/post/feedPost");
      return response.data.data;
    }
    catch(error){
      return error;
    }
  };

  const deletePost = async (id) => {
    try{
      const response = await authorizedInstance.delete(`/post/delete/${id}`);
      return response;
    }
    catch(error){
      return error;
    }
  };

  return { createPost, getPosts, deletePost };
};

export default PostApi;
