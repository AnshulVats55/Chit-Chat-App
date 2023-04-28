import { Avatar, CardHeader, IconButton } from "@mui/material";
import React,{useContext} from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { PostHeaderStyles } from "./postHead.styles";
import { Name } from "./Name/Name";
import { Dates } from "./Dates/Dates";
import DeleteIcon from '@mui/icons-material/Delete';
import PostContext from "../Posts";

export const PostHeader = ({post,avatarLetter, title, postDate, styles}) => {
  const { classes } = PostHeaderStyles(styles);
  const {handleDeletePost} = useContext(PostContext)
  const handleDelete =()=>{
     console.log(post.id)
     console.log(handleDeletePost)
     handleDeletePost(post.id)
  }
  return (
    <CardHeader
      avatar={<Avatar aria-label="recipe">{avatarLetter}</Avatar>}
      action={
        <IconButton aria-label="settings" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      }
      title={<Name />}
      subheader={<Dates />}
    />
  );
};

PostHeader.defaultProps = {
  avatarLetter: "R",
  title: "Shrimp and Chorizo Paella",
  postDate: `${new Date()}`,
};
