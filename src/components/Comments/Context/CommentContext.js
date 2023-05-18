import { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { handleAddComments, handleDeleteComments } from '../../../api/services/PostComments';
import { getAllPosts } from "../../../store/slices/PostDataSlice";
import { setSnackbar } from "../../../store/slices/SnackBarSlice";
const CommentsContext = createContext();

function Provider({ children, post }) {

  const [comments, setComments] = useState(post.comments);
  const dispatch = useDispatch();
  

  useEffect(()=>{
    dispatch(getAllPosts())
  } ,[comments])

  const createComment = async (data) => {
    
      const response = await handleAddComments(data);
      if(response.data.status === "success"){
        setComments([...comments, response.data.data]);
       
       
        dispatch(
          setSnackbar({
            snackbarOpen: true,
            snackbarType: "success",
            snackbarMessage: "Comment added successfully !",
          })
        )
      }
      else{
       
        dispatch(
          setSnackbar({
            snackbarOpen: true,
            snackbarType: "warning",
            snackbarMessage: "Error adding your comment !",
          })
        )
        
      }
  };

  const deleteCommentById = async (id) => {
    const response = await handleDeleteComments(id);

      if(response.data.status === "success"){
        setComments(comments.filter((comment) => comment.id !== id));
        dispatch(
          setSnackbar({
            snackbarOpen: true,
            snackbarType: "success",
            snackbarMessage: "Comment deleted successfully !",
          })
        )

        
      }
      else{
        dispatch(
          setSnackbar({
            snackbarOpen: true,
            snackbarType: "warning",
            snackbarMessage:"Error deleting your comment !",
          })
        )
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
