import axios from "axios";
import { useSelector } from "react-redux";
// import { Request, DeleteRequest } from "../services/Request";
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
    // const response = await Request("get", "/post/feedPost", "", token);
    const response = await authorizedInstance.get("/post/feedPost");
      return response.data.data;
  
  };

  const deletePost = async (id) => {
    // let response = await DeleteRequest("delete", "/post/delete/", id, token);
    const response = await authorizedInstance.delete(`/post/${id}`);
    return response;
  };

  return { createPost, getPosts, deletePost };
};

export default PostApi;
