import axios from "axios";
import { useSelector } from "react-redux";

const PostApi = () => {
  const currentUserId = useSelector((state) => {
    return state.userDataReducer[0].data.user.id;
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
      url: "http://172.16.1.150:8484/v1/post/",
      headers: {
        token: localStorage.getItem("token"),
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
      url: "http://172.16.1.150:8484/v1/post/allPost",
      headers: {
        token: localStorage.getItem("token"),
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
      url: `http://172.16.1.150:8484/v1/post/delete/${id}`,
      headers: {
        token: localStorage.getItem("token"),
      },
    };
    let response = await axios.request(config);
    return response;
  };

  return { createPost, getPosts, deletePost };
};

export default PostApi;
