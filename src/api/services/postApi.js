import axios from "axios";
import { useSelector } from "react-redux";
import { Request, DeleteRequest } from '../services/Request';

const token = localStorage.getItem("token");

const PostApi = () => {
  
  const currentUserId = useSelector((state) => {
    return state.userDataReducer[0]?.data?.user.id;
  });

  const createPost = async (datapost) => {
    let data = JSON.stringify({
      userId: currentUserId,
      body: datapost.postDesc,
      attachment: datapost.postMedia,
    });

    const response = await Request("post", "/v1/post/", data, token);
    return response;
  };

  const getPosts = async () => {
    const response = await Request("get", "/v1/post/allPost", "", token);
    return response.data.data;
  };

  const deletePost = async (id) => {
    let response = await DeleteRequest("delete", "/v1/post/delete/", id, token);
    return response;
  };

  return { createPost, getPosts, deletePost };
};

export default PostApi;