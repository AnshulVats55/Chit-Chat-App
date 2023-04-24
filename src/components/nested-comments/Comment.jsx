import React, { useEffect, useState } from "react";
import { ReactComponent as UpArrow } from "./assets/up-arrow.svg";
import { ReactComponent as DownArrow } from "./assets/down-arrow.svg";
import { Action } from "./Action";
import { useRef } from "react";
import  {commentStyle} from './comment.styles'
export const Comment = ({
  comment,
  handleInsertNode,
  handleEditNode,
  handleDeleteNode,
}) => {
  const [input, setInput] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [expand, setExpand] = useState(true);
  const inputRef = useRef(null);
  const {classes} = commentStyle();
  useEffect(() => {
    inputRef?.current?.focus();
  }, [editMode]);

  const handleNewComment = () => {
    setExpand(!expand);
    setShowInput(true);
  };
  const onAddComment = () => {
    if (editMode) {
      handleEditNode(comment.id, inputRef?.current?.innerText);
    } else {
      setExpand(true);
      handleInsertNode(comment.id, input);
      setShowInput(false);
      setInput("");
    }
    if (editMode) setEditMode(false);
  };
  return (
    <div>
      <div className={comment.id === 1 ? "inputContainer" : "commentContainer"}>
        {comment.id == 1 ? (
          <>
            <input
              type="text"
              className={classes.inputContainerFirstInput}
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="type..."
            />

            <Action
              className="reply comment"
              type="COMMENT"
              handleClick={onAddComment}
            />
          </>
        ) : (
          <>
            <span
               className={classes.commentContainerSpan}
              ref={inputRef}
              contentEditable={editMode}
              suppressContentEditableWarning={editMode}
              style={{ wordBreak: "break-word" }}
            >
              {comment.name}
            </span>
            <div style={{ display: "flex", marginTop: "5px" }}>
              {editMode ? (
                <>
                  <Action
                    className={classes.reply}
                    type="SAVE"
                    handleClick={onAddComment}
                  />
                  <Action
                    className={classes.reply}
                    type="CANCEL"
                    handleClick={() => {
                      if (inputRef.current)
                        inputRef.current.innerText = comment.name;
                      setEditMode(false);
                    }}
                  />
                </>
              ) : (
                <>
                  <Action
                    className={classes.reply}
                    type={
                      <>
                        {expand ? (
                          <UpArrow width="10px" height="10px" />
                        ) : (
                          <DownArrow width="10px" height="10px" />
                        )}{" "}
                        REPLY
                      </>
                    }
                    handleClick={handleNewComment}
                  />
                  <Action
                    className={classes.reply}
                    type="EDIT"
                    handleClick={() => setEditMode(true)}
                  />
                  <Action
                    className={classes.reply}
                    type="DELETE"
                    handleClick ={()=>{handleDeleteNode(comment.id)}}
                  />
                </>
              )}
            </div>
          </>
        )}
      </div>
      <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
        {showInput && (
          <div className={classes.inputContainer}>
            <input
              type="text"
              className={classes.inputContainerInput}
              autoFocus
              onChange={(e) => setInput(e.target.value)}
            />

            <Action className={classes.reply} type="REPLY" handleClick={onAddComment} />
            <Action
              className={classes.reply}
              type="CANCEL"
              handleClick={() => {
                setShowInput(false);
                if (!comment?.item.length>0) setExpand(false);
              }}
            />
          </div>
        )}
        {comment?.items?.map((cmnt) => {
          return (
            <Comment
              key={cmnt.id}
              handleInsertNode={handleInsertNode}
              handleEditNode={handleEditNode}
              handleDeleteNode={handleDeleteNode}
              comment={cmnt}
            />
          );
        })}
      </div>
    </div>
  );
};
