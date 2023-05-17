import { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { handleAddComments, handleDeleteComments } from '../../../api/services/PostComments';
import { getAllPosts } from "../../../store/slices/PostDataSlice";
import {changeDisplayState} from "../../../store/slices/DisplayAlertSlice";
import DisplayAlert from "../../AlertBox/DisplayAlert";

const CommentsContext = createContext();
function Provider({ children, post }) {

  const [comments, setComments] = useState(post.comments);

  const dispatch = useDispatch();
  const [showAlertToast, setshowAlertToast] = useState({visiblity: false, message: "", status: "Success | Error | info"});

  useEffect(()=>{
    dispatch(getAllPosts());
    if (showAlertToast.visiblity === true) {
      dispatch((changeDisplayState(showAlertToast)));
      setTimeout(()=>{
        setshowAlertToast({visiblity: false, message: "", status:""});
      }, 3000);
    }
  } ,[comments]);

  const createComment = async (data) => {
      const response = await handleAddComments(data);

      if(response?.data?.status === "success"){
        setComments([...comments, response.data.data]);
        setshowAlertToast({visiblity: true, message:"Comment added successfully !", status:"success"});
      }
      else if(response?.response?.data?.status === 'failure'){
        setshowAlertToast({visiblity: true, message:"Error adding comment !", status:"error"});
      }
  };

  const deleteCommentById = async (id) => {
    const response = await handleDeleteComments(id);

      if(response?.data?.status === "success"){
        setComments(comments.filter((comment) => comment.id !== id));
        setshowAlertToast({visiblity: true, message:"Comment deleted successfully !", status:"success"});
      }
      else if(response?.response?.data?.status === 'failure'){
        setshowAlertToast({visiblity: true, message:"Error deleting comment !", status:"error"});
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
      {showAlertToast?.visiblity &&  <DisplayAlert />}
    </CommentsContext.Provider>
  );
}

export { Provider };
export default CommentsContext;
