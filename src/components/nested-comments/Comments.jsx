import { useState } from "react";
import { Comment } from "./Comment";
import useNode from "./hooks/useNode";
import { commentStyle } from "./comment.styles";
import "./style.css";

const comments = {
  id: 1,
  items: [],
};

const Comments = () => {
  const { classes } = commentStyle();

  const [commentsData, setCommentsData] = useState(comments);
  const { insertNode, editNode, deleteNode } = useNode();

  const handleInsertNode = (commentId, item) => {
    const finalStructure = insertNode(commentsData, commentId, item);
    setCommentsData(finalStructure);
    console.log(finalStructure);
  };

  const handleEditNode = (commentId, value) => {
    const finalStructure = editNode(commentsData, commentId, value);
    setCommentsData(finalStructure);
    console.log(finalStructure);
  };

  const handleDeleteNode = (commentId) => {
    const finalStructure = deleteNode(commentsData, commentId);
    const temp = { ...finalStructure };
    setCommentsData(temp);
  };
  return (
    <div className={classes.container}>
      <Comment
        comment={commentsData}
        handleInsertNode={handleInsertNode}
        handleEditNode={handleEditNode}
        handleDeleteNode={handleDeleteNode}
      />
    </div>
  );
};

export default Comments;
