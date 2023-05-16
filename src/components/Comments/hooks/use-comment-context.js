import { useContext } from "react";
import CommentsContext from "../Context/CommentContext";

function useCommentsContext() {
  return useContext(CommentsContext);
}

export default useCommentsContext;