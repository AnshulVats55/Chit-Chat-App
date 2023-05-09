import { createContext, useState } from "react";
import axios from "axios";

const CommentsContext = createContext();

function Provider({ children, post }) {
  const userToken = localStorage.getItem("token");
  const [comments, setComments] = useState(post.comments);

  const axios = require("axios");
  const createComment = async (data) => {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://five5chitchat-knnx.onrender.com/v1/comment",
      headers: {
        token: userToken,
        "Content-Type": "application/json",
      },
      mode: "no-mode",
      referrerPolicy: "no-referrer",
      data: data,
    };

    try {
      const response = await axios.request(config);
      console.log(response.data.data);
      setComments([...comments, response.data.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCommentById = async (id) => {
    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: `https://five5chitchat-knnx.onrender.com/v1/comment/${id}`,
      headers: {
        token: userToken,
      },
    };

    await axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
    setComments(comments.filter((comment) => comment.id !== id));
  };

  const valueToShare = {
    post,
    comments,
    createComment,
    deleteCommentById,
  };

  return (
    <CommentsContext.Provider value={valueToShare}>
      {children}
    </CommentsContext.Provider>
  );
}

export { Provider };
export default CommentsContext;
