import { createContext, useState } from "react";
import { increasePostComments, decreasePostComments } from '../../../store/slices/CommentSlice';
import { useDispatch } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { handleAddComments, handleDeleteComments } from '../../../api/services/PostComments';

const CommentsContext = createContext();

function Provider({ children, post }) {

  const [comments, setComments] = useState(post.comments);

  const toast = useToast();
  const dispatch = useDispatch();

  const createComment = async (data) => {
      const response = await handleAddComments(data);

      if(response.data.status === "success"){
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
      else{
        toast({
          title: "Error adding your comment !",
          position: "top",
          description: "",
          status: "error",
          duration: 1000,
          isClosable: true,
        });
      }
  };

  const deleteCommentById = async (id) => {
    const response = await handleDeleteComments(id);

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
      else{
        toast({
          title: "Error deleting your comment !",
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
