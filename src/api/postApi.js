import axios from "axios";
import { useSelector } from "react-redux";
import IP_ADDRESS from './IPAddress';
const userToken = localStorage.getItem("token");

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

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${IP_ADDRESS}/post`,
      headers: {
        authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = axios.request(config);
    return response;
  };

  const getPosts = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${IP_ADDRESS}/post/feedPost`,
      headers: {
        authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
      },
    };

    let response = await axios.request(config);
    return response.data.data;
  };

  const deletePost = async (id) => {
    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: `${IP_ADDRESS}/post/${id}`,
      headers: {
        authorization: `Bearer ${userToken}`,
      },
    };
    let response = await axios.request(config);
    return response;
  };

  return { createPost, getPosts, deletePost };
};

export default PostApi;
