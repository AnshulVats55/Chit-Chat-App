import axios from "axios";
// const axios = require('axios')
const postApi = () => {
  const createPost = async (datapost) => {

    let data = JSON.stringify({
      userId: "6ff99443-43b9-4638-a015-230b04c7c051",
      body: datapost.postDesc,
      attachment: datapost.postMedia,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://192.168.1.50:8484/v1/post",
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
      url: "http://192.168.1.50:8484/v1/post/all?userId=6ff99443-43b9-4638-a015-230b04c7c051",
      headers: {
        token: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    };

    let response = await axios.request(config);
    return response.data.data;
  };

  const deletePost =async (id)=>{
    let config = {
       method: 'delete',
        maxBodyLength: Infinity,
        url: `http://192.168.1.50:8484/v1/post/delete/${id}`,
        headers: {
         token: localStorage.getItem("token"),
        }
      }
    let response = await axios.request(config)
    return response;
  }

  return { createPost, getPosts,deletePost };
};

export default postApi;
