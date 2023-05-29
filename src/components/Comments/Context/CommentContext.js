import { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  handleAddComments,
  handleDeleteComments,
} from "../../../api/services/PostComments";
import { getAllPosts } from "../../../store/slices/PostDataSlice";
import { setSnackbar } from "../../../store/slices/SnackBarSlice";
import message from "../../../Constants";

const CommentsContext = createContext();
function Provider({ children, post }) {
  const [comments, setComments] = useState(post.comments ? post.comments : []);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [comments, dispatch]);

  const createComment = async (data) => {
    const response = await handleAddComments(data);

    if (response?.data?.status === "success") {
      setComments([...comments, response.data.data]);
      dispatch(
        setSnackbar({
          snackbarOpen: true,
          snackbarType: message.SUCCESS,
          snackbarMessage: message.COMMENT_CREATED_SUCCESS,
        })
      );
    } else if (response?.response?.data?.status === "failure") {
      dispatch(
        setSnackbar({
          snackbarOpen: true,
          snackbarType: message.ERROR,
          snackbarMessage: message.COMMENT_CREATED_ERROR,
        })
      );
    }
  };

  const deleteCommentById = async (id) => {
    const response = await handleDeleteComments(id);

    if (response?.data?.status === "success") {
      setComments(comments.filter((comment) => comment.id !== id));
      dispatch(
        setSnackbar({
          snackbarOpen: true,
          snackbarType: message.SUCCESS,
          snackbarMessage: message.COMMENT_DELETED_SUCCESS,
        })
      );
    } else if (response?.response?.data?.status === "failure") {
      dispatch(
        setSnackbar({
          snackbarOpen: true,
          snackbarType: message.ERROR,
          snackbarMessage: message.COMMENT_DELETED_ERROR,
        })
      );
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
