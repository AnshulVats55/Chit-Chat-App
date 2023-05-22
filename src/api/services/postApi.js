import Instance from "./Interceptors";

const PostApi = () => {
  const createPost = async (datapost, currentUserId) => {
    let data = {
      userId: currentUserId,
      body: datapost.postDesc,
      attachment: datapost.postMedia,
    };

    try{
      const response = await Instance({
        url:'/post/',
        method:"POST",
        data
      })
      console.log(response)
      return response;
    }
    catch(error){
      return error;
    }
  };

  const getPosts = async () => {
    try{
      const response = await Instance({
        url:'post/feedPost',
        method:"GET"
      })
      return response.data.data;
    }
    catch(error){
      return error;
    }
  };

  const deletePost = async (id) => {
    try{
      const response = await Instance({
        url:`post/delete/${id}`,
        method:"DELETE"
      })
      return response;
    }
    catch(error){
      return error;
    }
  };

  return { createPost, getPosts, deletePost };
};

export default PostApi;
