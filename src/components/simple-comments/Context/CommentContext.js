import { createContext, useState } from "react";
import { increasePostComments, decreasePostComments } from '../../../store/slices/CommentSlice';
import { useDispatch } from "react-redux";
import { useToast } from "@chakra-ui/react";

const CommentsContext = createContext();

function Provider({ children, post }) {

  const userToken = localStorage.getItem("token");
  const [comments, setComments] = useState(post.comments);

  const toast = useToast();

  const dispatch = useDispatch();

  const axios = require("axios");
  const createComment = async (data) => {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://172.16.1.135:8484/v1/comment",
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
      console.log(response);
      setComments([...comments, response.data.data]);
      dispatch(increasePostComments({postId: post.id}));
      toast({
        title: "Comment added successfully !",
        position: "top",
        description: "",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
    }
    catch (error) {
      toast({
        title: "Error adding comment !",
        position: "top",
        description: "",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    }
  };

  const deleteCommentById = async (id) => {
    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: `http://172.16.1.135:8484/v1/comment/${id}`,
      headers: {
        token: userToken,
      },
    };

    try{
      const response = await axios.request(config);
      console.log(response);
      if(response.data.status === "success"){
        setComments(comments.filter((comment) => comment.id !== id));
        dispatch(decreasePostComments({postId: post.id}));
        toast({
          title: "Comment deleted successfully !",
          position: "top",
          description: "",
          status: "success",
          duration: 1000,
          isClosable: true,
        });
      }
    }
    catch(error){
      console.log(error);
      toast({
        title: "Error deleting comment !",
        position: "top",
        description: "",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    }
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
