import axios from "axios";
import { useSelector } from "react-redux";
import { Request, DeleteRequest } from "../services/Request";

const token = localStorage.getItem("token");

const PostApi = () => {
  const createPost = async (datapost, currentUserId) => {
    let data = JSON.stringify({
      userId: currentUserId,
      body: datapost.postDesc,
      attachment: datapost.postMedia,
    });

    const response = await Request("post", "/post/", data, token);
    return response;
  };

  const getPosts = async () => {
    const response = await Request("get", "/post/feedPost", "", token);
    console.log("==================>", response);
    return response.data.data;
  };

  const deletePost = async (id) => {
    let response = await DeleteRequest("delete", "/post/delete/", id, token);
    return response;
  };

  return { createPost, getPosts, deletePost };
};

export default PostApi;
